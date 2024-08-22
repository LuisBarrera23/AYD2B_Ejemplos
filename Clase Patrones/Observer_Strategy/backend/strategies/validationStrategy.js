// strategies/validationStrategy.js
class ValidationStrategy {
    validate(userData) {
        throw new Error("Este método debe ser sobrescrito por subclases");
    }
}

module.exports = ValidationStrategy;
