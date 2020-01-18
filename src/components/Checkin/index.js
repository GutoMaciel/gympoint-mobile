import React, {useMemo} from 'react';

import { formatRelative, parseISO } from 'date-fns';

import { Container, CheckinNumber, CheckinDate } from './styles';

export default function Checkin({checkin, index, totalRows}) {

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
