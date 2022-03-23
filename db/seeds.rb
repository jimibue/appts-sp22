# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

d1 = Doctor.create(name:"Dr gill")
d2 = Doctor.create(name:"Dr lisa")

p1 = Patient.create(name:"sick sally")
p2 = Patient.create(name:"ill bill")
p3 = Patient.create(name:"steve")

Appointment.create(date:'June 1', doctor_id:d1.id, patient_id:p1.id)
Appointment.create(date:'June 2', doctor_id:d1.id, patient_id:p1.id)

Appointment.create(date:'June 2', doctor_id:d2.id, patient_id:p2.id)
Appointment.create(date:'June 3', doctor_id:d2.id, patient_id:p1.id)