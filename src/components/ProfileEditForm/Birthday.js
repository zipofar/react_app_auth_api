import React from 'react';
export default class Birthday extends React.Component
{
    constructor(props) {
        super(props);

        this.monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December',];

        const birthday = { year: 'Year', month: 'Month', day: 'Day' };

        if (props.initBirthday !== 'undefined' && props.initBirthday !== null) {

            const dateBirthday = new Date(props.initBirthday);
            birthday['year'] = dateBirthday.getFullYear();
            birthday['month'] = this.monthNames[dateBirthday.getMonth()];
            birthday['day'] = dateBirthday.getDate();
        }

        this.state = { ...birthday };
    }

    onChangeElement = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {this.props.updateBirthday(this.normalizeDate())});
    };

    normalizeDate = () => {
        const { year, month, day } = this.state;
        if ( year === 'Year' && month === 'Month'  && day === 'Day') {
            return null;
        }

        const numMonth = this.monthNames.indexOf(month) + 1;
        const normalizedDate = [year, numMonth, day].join('-');
        return normalizedDate;
    };

    showDays = () => {
        const days = ['Day'];
        for (let i = 1; i <= 31; i += 1) {
            days.push(i);
        }

        return(
            <select name='day' onChange={this.onChangeElement} value={this.state.day.toString()}>
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
            <div className="row responsive-label">
                <div className="col-sm-12 col-md-2 label">
                    <label>Birthday:</label>
                </div>
                <div className="col-sm-12 col-md">
                    { this.showDays() }
                    { this.showMonths() }
                    { this.showYears() }
                </div>
            </div>
        );
    }
}

