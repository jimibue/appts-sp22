class Patient < ApplicationRecord
    # this allows to Patient.first.appointments
    has_many :appointments
    has_many :doctors, through: :appointments
end
