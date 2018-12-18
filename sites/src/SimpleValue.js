const $ = require("jquery");
const template = `
    <div>
        <!-- read and write property salary -->
        <input type="text" s-value="salary:salary"><br/>
        <!-- display salary with a format -->
        <input type="text" s-value="salary:salary:$&nbsp;{0}"><br/>
        <!-- convert the string value to number when doing set -->
        <input type="text" s-value="salary:salary:$&nbsp;{0}:number"><br/>
        <!-- only number accepted when typing -->
        <input type="text" s-value="salary:salary:$&nbsp;{0}:number:^[1-9]\d*|0$"><br/>
        <!-- only set data back when hitting enter key (not work now) -->
        <input type="text" s-value="salary:salary:$&nbsp;{0}:number:^[1-9]\d*|0$ keypress:13"><br/>
    </div>
`;
module.exports = class SimpleValue {
    constructor() {
        this.salary = 1234;
    }
    render() {
        this.$el = $(template);
        SJS.compile(this.$el[0], this, new SJS.Signal());
        return this;
    }
};