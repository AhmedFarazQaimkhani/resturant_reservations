// Packages
import React from 'react';
import DatePicker from 'react-datepicker';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Global Constants
import { GLOBALCONSTANTS } from '../constants/globalConstants';

interface DrawerProps {
  show: boolean;
  status: string;
  shift: string;
  area: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setShift: React.Dispatch<React.SetStateAction<string>>;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  handleApply: () => void;
  resetFilters: () => void;
  reservationDate: Date | string | null;
  setReservationDate: React.Dispatch<
    React.SetStateAction<Date | string | null>
  >;
}

export const Drawer = ({
  show,
  status,
  shift,
  area,
  setShow,
  setStatus,
  setShift,
  setArea,
  handleApply,
  resetFilters,
  reservationDate,
  setReservationDate,
}: DrawerProps) => {
  const handleClose = () => setShow(false);

  // Sets Status Value
  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  // Sets Shift Value
  const handleShift = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShift(event.target.value);
  };

  // Sets Area Value
  const handleArea = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(event.target.value);
  };

  // Resets Filters
  const handleReset = () => {
    setStatus('');
    setShift('');
    setArea('');
    setReservationDate('');
    resetFilters();
  };
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Reservation Status */}
        <div className="form-group m-3">
          <label htmlFor="status" className="fs-6">
            Status
          </label>
          <select
            className="form-control"
            id="status"
            onChange={handleStatus}
            value={status}
          >
            <option value="" hidden>
              Select Status
            </option>
            {GLOBALCONSTANTS.STATUS.map((statusValue: string) => {
              return (
                <option value={statusValue} key={statusValue}>
                  {statusValue}
                </option>
              );
            })}
          </select>
        </div>

        {/* Reservation Shifts */}
        <div className="form-group m-3">
          <label htmlFor="shifts" className="fs-6">
            Shifts
          </label>
          <select
            className="form-control"
            id="shifts"
            value={shift}
            onChange={handleShift}
          >
            <option value="" hidden>
              Select Status
            </option>
            {GLOBALCONSTANTS.SHIFTS.map((shiftValue: string) => {
              return (
                <option value={shiftValue} key={shiftValue}>
                  {shiftValue}
                </option>
              );
            })}
          </select>
        </div>

        {/* Reservation Area */}
        <div className="form-group m-3">
          <label htmlFor="arealabel" className="fs-6">
            Area
          </label>
          <select
            className="form-control"
            id="arealabel"
            value={area}
            onChange={handleArea}
          >
            <option value="" hidden>
              Select
            </option>
            {GLOBALCONSTANTS.AREA.map((areaValue: string) => {
              return (
                <option value={areaValue} key={areaValue}>
                  {areaValue}
                </option>
              );
            })}
          </select>
        </div>

        {/* Reservation Date */}
        <div className="form-group m-3">
          <label htmlFor="area" className="fs-6">
            Reservation Date
          </label>
          <DatePicker
            className="form-control"
            selected={reservationDate as any}
            onChange={(date: Date) => setReservationDate(date)}
            excludeDates={[new Date()]}
            dateFormat="dd.MM.yyyy"
            placeholderText="Select Date"
          />
        </div>

        {/* Buttons */}
        <button
          type="button"
          className="btn btn-light mx-2 float-right"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-primary float-right"
          onClick={handleApply}
        >
          Apply
        </button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
