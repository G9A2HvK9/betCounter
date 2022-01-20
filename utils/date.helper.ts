export const validateDates = (startDate: string, endDate: string) => {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let currentDate = new Date();
    let startDateLessThanToday = start < currentDate;

    let sameDates = start.getTime() === end.getTime();
    if (sameDates) {
      throw new Error("Start and End dates cannot be same");
    }

    if (start < end) {
      throw new Error("Start date must be greater than end date");
    }

    if (startDateLessThanToday) {
      throw new Error("Start date must be greater than today");
    }

    return true;
  };