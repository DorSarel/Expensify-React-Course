import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {

    state = {
        calenderFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    };

    onTextChange =  (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        const value = e.target.value;
        if (value === 'date') {
            this.props.sortByDate();
        }
        else {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input type='text' className='text-input' value={this.props.filters.text} onChange={this.onTextChange} placeholder='Search expenses' />
                    </div>

                    <div className='input-group__item'>
                        <select value={this.props.filters.sortBy} className='select' onChange={this.onSortChange}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>

                    <div className='input-group__item'>
                        <DateRangePicker 
                        startDateId={'start'}
                        endDateId={'end'}
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate((endDate)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);