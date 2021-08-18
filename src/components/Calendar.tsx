import { DateRange } from "react-date-range";
import { useState } from "react";
const Calendar = () => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__title">October, 2020</div>
        <div>
          <i className="icon icon__leftarrow mr-2" />
          <i className="icon icon__rightarrow ml-2 " />
        </div>
      </div>
      <div>
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
    </div>
  );
};

export default Calendar;
