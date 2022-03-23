import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";


const Appointments = () => {
  const { response: docResponse, loading: docLoading } =
    useAxiosOnMount("/api/doctors");
  const { response: patientsResponse, loading: patientsLoading } =
    useAxiosOnMount("/api/patients");
  const { response: apptsResponse, loading: apptsLoading } =
    useAxiosOnMount("/api/appointments");



  // Three arrays that looks like this
 //appts: [{"id":1,"doctor_id":1,"patient_id":1,"date":"June 1"}]
 //doctors: [{"id":1,name:'DR Bill""}]
 //patients: [{"id":1,name:'Jon',}]

 // [{id:1, doctor_id:1, doctor_name:'bill', patient:'sally', patient_id:1, date:'June 1'  },
 //  {id:2, doctor_id:1, doctor_name:'bill', patient:'sally', patient_id:1, date:'June 3'  }
 //  {id:3, doctor_id:1, doctor_name:'bill', patient:'George', patient_id:2, date:'June 2'  }
 //  {id:4, doctor_id:2, doctor_name:'Jon', patient:'George', patient_id:2, date:'June 2'  }
//]
// => 
// [
//     doctor_id:1, doctor_name:'bill'},
//     doctor_id:1, doctor_name:'bill'},
// ]

 // we want to convert into one array
 // [{id: 1, patient: "Jon", doctor: "Dr Liz", date: "june 1" }]
   // all my response are set when called
 const normalizedData = () => {
     // this appts from db
    return apptsResponse.data.map(appt=>{
        // find the doctor
        // docResponse.data (doctors)
        let doctor = docResponse.data.find((doc)=> doc.id === appt.doctor_id)
        let patient = patientsResponse.data.find((pat)=> pat.id === appt.patient_id)
        return ({id:appt.id, date:appt.date, doctor:doctor.name, patient:patient.name})
    })
};

  const renderAppointments = (appointments)=>{
      return appointments.map(a=>{
          return (
              <div key={a.id}>
                  <h1>Doctor: {a.doctor}</h1>
                  <h1>Patient: {a.patient}</h1>
                  <p>date: {a.date}</p>
              </div>
          )
      })
  }

  const renderData = () => {
    // just show loading if any of my axios calls are in progress
    if (docLoading || patientsLoading || apptsLoading) {
      return <p>loading</p>;
    }
    // all axios calls done
    // NEW STEP normalizingData: changing structure of data from BE to match how FE wants it: Week7/8
    let appts = normalizedData();
    return renderAppointments(appts)

  };
  return (
    <div>
      <h1>Appointments</h1>
      {renderData()}
    </div>
  );
};

export default Appointments;
