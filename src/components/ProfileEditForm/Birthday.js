import React from 'react';
export default class Birthday extends React.Component
{
    constructor(props) {
        super(props);
        const birthday = new Date(props.children);

        this.monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December',];

        this.state = {
            year: birthday.getFullYear(),
            month: this.monthNames[birthday.getMonth()],
            day: birthday.getDate(),
        };
    }


    onChangeElement = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


    onBlurElement = () => {
        const { year, month, day } = this.state;
        const numMonth = this.monthNames.indexOf(month) + 1;
        const normalizedDate = [year, numMonth, day].join('-');
        this.props.updateBirthday(normalizedDate);
    };

    showDays = () => {
        const days = ['Day'];
        for (let i = 1; i <= 31; i += 1) {
            days.push(i);
        }

        return(
            <select name='day' onChange={this.onChangeElement} onBlur={this.onBlurElement} value={this.state.day.toString()}>
                {days.map((num) => {
                    return <option key={num}>{num}</option>
                })}
            </select>
        );
    };

    showYears = () => {
        const years = ['Year'];
        const currentYear = (new Date()).getFullYear();
        for (let i = currentYear; i >= 1910; i -= 1) {
            years.push(i);
        }

        return(
            <select name='year' onChange={this.onChangeElement} onBlur={this.onBlurElement} value={this.state.year.toString()}>
                {years.map((num) => {
                    return(
                        <option key={num}>{num}</option>
                    );
                })}
            </select>
        );
    };

    showMonths = () => {
        const months = ['Month', ...this.monthNames];

        return(
            <select name='month' onChange={this.onChangeElement} onBlur={this.onBlurElement} value={this.state.month}>
                {months.map((month, i) => {
                    return(
                        <option key={i}>{month}</option>
                    );
                })}
            </select>
        );
    };

    render()
    {
        return(
            <div>
                { this.showDays() }
                { this.showMonths() }
                { this.showYears() }
            </div>
        );
    }
}

