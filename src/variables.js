
export const DATE_TEXT = {
    MONTHS: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    WEEKDAYS:[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    ORDINAL_DAYS: (day)=>{
        let ones = day % 10
        switch(ones){
            case 1:
                return `${day}st`;
            case 2:
                return `${day}nd`;
            case 3:
                return `${day}rd`;
            default:
                return `${day}th`;
        }
    }
}

export const NAMESPACE = "48e48b76-13a9-416e-85f0-fc3f43394628"