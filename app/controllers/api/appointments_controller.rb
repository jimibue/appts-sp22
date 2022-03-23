class Api::AppointmentsController < ApplicationController

    def all_data
      render json: {doctors: Doctor.all, 
                    patients: Patient.all, 
                    appointments:Appointment.all}
    end

    def index
        render json: Appointment.all
    end

    def create
      appointment = Appointment.new(appointment_params)
      if(appointment.save)
        render json: appointment
      else
        render json: {errors: appointment.errors.full_messages}, status: 422
      end
    end

    private
    
    def appointment_params
        params.require(:appointment).permit(:date, :doctor_id, :patient_id)
    end

end
