import React  from 'react';
import Moment from 'react-moment';

export default class  extends React.Component {
    render() {
        const calendarStrings = {
            lastDay : '[Yesterday at] LT',
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            lastWeek : '[last] dddd [at] LT',
            nextWeek : 'dddd [at] LT',
            sameElse : 'L'
        };

        return (
            <Moment calendar={calendarStrings}>
                '1976-04-19T12:59-0500'
            </Moment>
        );
    }
}
