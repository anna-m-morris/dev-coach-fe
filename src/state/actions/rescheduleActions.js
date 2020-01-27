export const RESCHEDULE_APPOINTMENT_START =
  'RESCHEDULE_APPOINTMENT_START';
export const RESCHEDULE_APPOINTMENT_ERROR =
  'RESCHEDULE_APPOINTMENT_ERROR';
export const RESCHEDULE_APPOINTMENT_SUCCESSFUL =
  'RESCHEDULE_APPOINTMENT_SUCCESSFUL';

export const rescheduleAppointment = (
  coach,
  student,
  appointment_datetime,
  topic_id,
  length_id,
  props,
  closeMessage,
) => dispatch => {
  dispatch({ type: RESCHEDULE_APPOINTMENT_START });
  const appointment = {
    coach_id: coach.id,
    student_id: student.id,
    topic_id,
    length_id,
    appointment_datetime,
  };

  axiosWithAuth()
    .post(`${url}appointment`, appointment)
    .then(res => {
      setTimeout(() => {
        props.history.push('/dashboard');
        closeMessage();
      }, 2000);

      const coach_email = {
        email: coach.email,
        text: `Hello ${coach.first_name} ${coach.last_name},
          your initial appointment with ${student.first_name} ${student.last_name} has been resheduled for ${appointment_datetime},
          please get in touch with ${student.first_name} ${student.last_name} if you can't 
          make it at the date. Their email address is: ${student.email}`,
        subject: 'Quality Hub appointment',
      };

      return axiosWithAuth()
        .post(`${url}appointment/email`, coach_email)
        .then(res => {
          const student_email = {
            email: student.email,
            text: `Hello ${student.first_name} ${student.last_name},
              you have successfully resheduled your appointment for the date: ${appointment_datetime}`,
            subject: 'Quality Hub appointment',
          };

          return axiosWithAuth()
            .post(`${url}appointment/email`, student_email)
            .then(res => {
              dispatch({
                type: RESCHEDULE_APPOINTMENT_SUCCESSFUL,
                payload: res.data.appointments,
              });
            })
            .catch(err => {
              dispatch({
                type: RESCHEDULE_APPOINTMENT_ERROR,
                payload: err,
              });
            });
        })
        .catch(err => {
          dispatch({
            type: RESCHEDULE_APPOINTMENT_ERROR,
            payload: err,
          });
        });
    })
    .catch(err => {
      dispatch({ type: RESCHEDULE_APPOINTMENT_ERROR, payload: err });
    });
};
