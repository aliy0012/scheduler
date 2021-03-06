export function getAppointmentsForDay(state, day) {
  const filteredAppointments = state.days.filter((e) => e.name === day);
  let appointments = [];
  if (filteredAppointments.length) {
    appointments = filteredAppointments[0].appointments.map(
      (index) => state.appointments[index]
    );
  }
  return appointments;
}

export function getInterview(state, interview) {
  const result = [];
  if (interview) {
    result["student"] = interview.student;
    result["interviewer"] = state.interviewers[interview.interviewer];
  } else {
    return null;
  }
  return result;
}

export function getInterviewersForDay(state, day) {
  const filteredAppointments = state.days.filter((e) => e.name === day);
  let interviewers = [];
  if (filteredAppointments.length) {
    interviewers = filteredAppointments[0].interviewers.map(
      (index) => state.interviewers[index]
    );
  }
  return interviewers;
}