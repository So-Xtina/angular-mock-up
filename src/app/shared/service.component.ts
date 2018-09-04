import { EventEmitter, Injectable } from "@angular/core";
import { Patient } from "./data.model";

@Injectable({
  providedIn: "root"
})
export class PatientsService {
  filteredPatients = new EventEmitter<Patient[]>(false);

  private patients: Patient[] = [
    new Patient(
      1,
      { type: "Accepted", progress: "0%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "06/22/2018", value: "66" },
      { date: "06/22/2018", value: "66" }
    ),
    new Patient(
      2,
      { type: "Pending", progress: null },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "06/22/2018", value: "66" },
      { date: null, value: null }
    ),
    new Patient(
      3,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/15/2018", value: "12" },
      { date: "08/15/2018", value: "12" }
    ),
    new Patient(
      4,
      { type: "Pending", progress: null },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/20/2018", value: "8" },
      { date: null, value: null }
    ),
    new Patient(
      5,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/20/2018", value: "8" },
      { date: "08/20/2018", value: "8" }
    ),
    new Patient(
      6,
      { type: "Accepted", progress: "0%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/05/2018", value: "22" },
      { date: "08/05/2018", value: "22" }
    ),
    new Patient(
      7,
      { type: "Pending", progress: null },
      "Authorize",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/21/2018", value: "7" },
      { date: null, value: null }
    ),
    new Patient(
      8,
      { type: "Pending", progress: null },
      "Authorize",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/22/2018", value: "6" },
      { date: null, value: null }
    ),
    new Patient(
      9,
      { type: "Accepted", progress: "0%" },
      "Benefits",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/21/2018", value: "7" },
      { date: "08/21/2018", value: "7" }
    ),
    new Patient(
      10,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/05/2018", value: "22" },
      { date: "08/05/2018", value: "22" }
    ),
    new Patient(
      11,
      { type: "Accepted", progress: "0%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "06/22/2018", value: "66" },
      { date: "06/22/2018", value: "66" }
    ),
    new Patient(
      12,
      { type: "Pending", progress: null },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "06/22/2018", value: "66" },
      { date: null, value: null }
    ),
    new Patient(
      13,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/15/2018", value: "12" },
      { date: "08/15/2018", value: "12" }
    ),
    new Patient(
      14,
      { type: "Pending", progress: null },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/20/2018", value: "8" },
      { date: null, value: null }
    ),
    new Patient(
      15,
      { type: "Accepted", progress: "50%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/20/2018", value: "8" },
      { date: "08/20/2018", value: "8" }
    ),
    new Patient(
      16,
      { type: "Accepted", progress: "0%" },
      "Accept",
      "Ricky Nesheiwat",
      { last_name: "Last", first_name: "First" },
      { date: "08/05/2018", value: "22" },
      { date: "08/05/2018", value: "22" }
    )
  ];

  getAllPatients(): Patient[] {
    return this.patients.slice();
  }

  //search bar
  filterPatients(term: string): any {
    let searchResults = [];
    let patient = this.patients;

    if (!term) {
      for (var i = 0; i < patient.length; i++) {
        searchResults.push(patient[i]);
      }
    } else {
      this.patients.forEach(function(patient, index) {
        for (var key in patient) {
          var patientValue = patient[key];
          if (patientValue !== null) {
            if (typeof patientValue === "string") {
              patientValue = patientValue.toLowerCase();

              if (patientValue.includes(term)) {
                searchResults.push(patient);
              }
            } else if (typeof patientValue === "object") {
              for (var innerKey in patientValue) {
                var innerValue = patientValue[innerKey];
                if (innerValue !== null) {
                  innerValue = innerValue.toLowerCase();

                  if (innerValue.includes(term)) {
                    searchResults.push(patient);
                  }
                }
              }
            }
          }
        }
      });
    }

    this.filteredPatients.emit(searchResults);
  }

  //filters : status / goal type
  choices(choice) {
    let results = [];
    console.log(choice);

    this.patients.forEach(function(patient) {
      for (var key in patient) {
        var patientValue = patient[key];
        if (patientValue !== null) {
          if (typeof patientValue === "string" && choice !== "Accepted") {
            if (patientValue.includes(choice)) {
              results.push(patient);
            }
          } else if (typeof patientValue === "object" && choice !== "Accept") {
            for (var innerKey in patientValue) {
              var innerValue = patientValue[innerKey];
              if (innerValue !== null) {
                if (innerValue.includes(choice)) {
                  results.push(patient);
                }
              }
            }
          }
        }
      }
    });

    this.filteredPatients.emit(results);
  }
}
