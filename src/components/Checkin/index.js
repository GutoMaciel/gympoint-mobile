import React, {useMemo} from 'react';

import { formatRelative, parseISO } from 'date-fns';

import { Container, CheckinNumber, CheckinDate } from './styles';

export default function Checkin({checkin, index, totalRows}) {
  // const response = await api.get(`/students/${studentId}/checkins`);

  // const createdAt = response.data.rows.map(check => ({
  //   created_at: formatRelative(parseISO(check.created_at), new Date())
  // }))


  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(checkin.createdAt), new Date());
  }, [checkin.createdAt]);

  const checkinNumber = useMemo(() => {
    return totalRows - index;
  }, [index, totalRows]);

  return (
    <Container>
      <CheckinNumber>{`Check-in #${checkinNumber}`} </CheckinNumber>
      <CheckinDate>{dateFormatted}</CheckinDate>
    </Container>
  );
}
