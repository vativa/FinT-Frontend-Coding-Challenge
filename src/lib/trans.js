// Factory function
const trans = (message, language) => {
    const Trans = new trans.init(message, language);
    // Restrict usage to only one method
    return Trans.toString();
};

// Function constructur and object properties
trans.init = function(message, language = 'de') {
    this.message = message;
    this.language = language;
    // Validate properties
    this.validate();
};

// Public properties to share accross all instances
trans.init.prototype = {
    ...String.prototype,
    validate: function() {
        if (!this.message) {
            throw "Message for trans() can not be empty.";
        }
        if (typeof this.message !== 'string') {
            throw `Invalid message "${this.message}" given to trans()`;
        }
    },
    toString: function() {
        // Extend string object capabilities
        String.prototype.ucfirst = _ucfirst;
        // Return an extended string object
        return new String(_translate(this.message));
    }
};

// Put here private/hidden methods
const _translate = function(message) {
    try {
        return require('lang/de.json')[message] || message;
    } catch (e) {
        return message;
    }
};
const _ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
};

export default trans;
