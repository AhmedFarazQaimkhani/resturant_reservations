// Packages
import { useEffect, useState } from 'react';
import moment from 'moment';

// Components
import { FilterButton } from '../components/FilterButton';
import { Drawer } from '../components/FilterDrawer';
import { SearchInput } from '../components/SearchInput';
import Table from '../components/Table';

// Interfaces
import { Column, QueryParams, Reservation } from '../common/interfaces';

// Global Constants
import { GLOBALCONSTANTS } from '../constants/globalConstants';

// Hooks
import { useSwitch } from '../hooks/useSwitch';

// Services
import { reservationApiService } from '../services/reservations/reservationsApiService';

// Utils
import { formatDate } from '../utils/formatDate';
import { formatTime } from '../utils/formatTime';

export const Reservations = () => {
  // Hooks
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [reservationDate, setReservationDate] = useState<Date | string | null>(
    null
  );
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [shift, setShift] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [show, setShow] = useState(false);
  // Custom Hook
  const [customSwitch] = useSwitch(GLOBALCONSTANTS.STATUS_BADGES);

  // Get Reservations from server
  const getReservations = async () => {
    try {
      const response = await reservationApiService.getReservations();
      const upcomingReservations = response.filter(
        (res: any) => res.start >= moment().toISOString()
      );
      setReservations(upcomingReservations);
    } catch (error) {
      // console.log(error)
    }
  };

  // On init get reservations
  useEffect(() => {
    void getReservations();
  }, []);

  // Search data if user search any value
  const searchedData = () => {
    const filteredReservations = reservations?.filter(
      (reservation: Reservation) =>
        !searchedValue.length ||
        reservation.customer.firstName
          .toString()
          .toLowerCase()
          .includes(searchedValue.toString().toLowerCase()) ||
        reservation.customer?.lastName
          ?.toString()
          .toLowerCase()
          .includes(searchedValue.toString().toLowerCase())
    );
    return filteredReservations && filteredReservations.length > 0
      ? filteredReservations
      : reservations;
  };

  // Runs when user search value
  useEffect(() => {
    searchedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedValue]);

  // Columns
  const columns: Column[] = [
    {
      accessor: 'customer.firstName',
      label: 'Customer',
      sortable: true,
      renderCell: (params: any) =>
        `${params.customer.firstName} ${params.customer.lastName}`,
    },
    {
      accessor: 'area',
      label: 'Area',
      sortable: true,
    },
    {
      accessor: 'quantity',
      label: 'Quantity',
      sortable: true,
    },
    {
      accessor: 'shift',
      label: 'Shift',
      sortable: true,
    },
    {
      accessor: 'businessDate',
      label: 'Reservation Date',
      sortable: true,
    },
    {
      accessor: 'start',
      label: 'Reservation From',
      sortable: true,
      renderCell: (params: any) => formatTime(params.start),
    },
    {
      accessor: 'end',
      label: 'Reservation To',
      sortable: true,
      renderCell: (params: any) => formatTime(params.end),
    },
    {
      accessor: 'guestNotes',
      label: 'Notes',
      sortable: true,
    },
    {
      accessor: 'status',
      label: 'Status',
      sortable: true,
      renderCell: (params: any) => (
        <span
          className={`badge ${customSwitch(params.status.replace(' ', ''))}`}
        >
          {params.status}
        </span>
      ),
    },
  ];

  // Filter reservations by selected filters
  const getReservationsByQueryParams = async (queryParams: QueryParams) => {
    try {
      const response = await reservationApiService.getReservationsByQueryParam(
        queryParams
      );
      setReservations(response);
    } catch (error) {
      console.log(error);
    }
  };
  // Gatehrs filters data and calls getReservationsByQueryParams
  const handleFilter = () => {
    if (!status && !shift && !area && !reservationDate) return;
    const businessDate = formatDate(reservationDate);
    const queryParams = {
      status,
      shift,
      area,
      businessDate,
    };
    void getReservationsByQueryParams(queryParams);
  };

  // On reset filters getReservations
  const resetFilters = () => {
    if (status || shift || area || reservationDate) void getReservations();
  };

  return (
    <div>
      {/* Search Input and Filter Button */}
      <div className="w-100 d-inline-flex justify-content-between">
        <SearchInput
          tooltipMessage="Search By Customer Name & Surname"
          setSearchedValue={setSearchedValue}
        />
        {/* Filter button opens filters drawer */}
        <FilterButton onClick={() => setShow(!show)} />
      </div>
      {/* Separator */}
      <hr className="hr my-3" />

      {/* Table to show Reservations */}
      <Table data={searchedData()} columns={columns} />

      {/* Filters Drawer */}
      <Drawer
        show={show}
        status={status}
        shift={shift}
        area={area}
        setShow={setShow}
        setStatus={setStatus}
        setShift={setShift}
        setArea={setArea}
        handleApply={handleFilter}
        resetFilters={resetFilters}
        reservationDate={reservationDate}
        setReservationDate={setReservationDate}
      />
    </div>
  );
};
