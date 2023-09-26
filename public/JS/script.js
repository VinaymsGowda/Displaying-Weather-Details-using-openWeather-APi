
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
stateSelect.setAttribute("disabled", true);
citySelect.setAttribute("disabled", true);



const countryStateData = {
        "india": {
            "states": ["Andhra Pradesh", "Tamil Nadu", "Karnataka", "Maharashtra"],
            "cities": {
                "Andhra Pradesh": ["Hyderabad", "Visakhapatnam"],
                "Tamil Nadu": ["Chennai", "Coimbatore"],
                "Karnataka": ["Bangalore", "Mysore"],
                "Maharashtra": ["Mumbai", "Pune"]
            }
        },
        "pakistan": {
            "states": ["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan"],
            "cities": {
                "Sindh": ["Karachi", "Hyderabad"],
                "Punjab": ["Lahore", "Faisalabad"],
                "Khyber Pakhtunkhwa": ["Peshawar", "Abbottabad"],
                "Balochistan": ["Quetta", "Gwadar"]
            }
        },
        "china": {
            "states": ["Guangdong", "Shanghai", "Beijing", "Sichuan"],
            "cities": {
                "Guangdong": ["Guangzhou", "Shenzhen"],
                "Shanghai": ["Shanghai City"],
                "Beijing": ["Beijing City"],
                "Sichuan": ["Chengdu", "Mianyang"]
            }
        },
        "usa": {
            "states": ["California", "New York", "Texas", "Florida"],
            "cities": {
                "California": ["Los Angeles", "San Francisco"],
                "New York": ["New York City", "Buffalo"],
                "Texas": ["Houston", "Austin"],
                "Florida": ["Miami", "Orlando"]
            }
        }
    }

function updateStates() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const selectedCountry = countrySelect.value;

    const states = countryStateData[selectedCountry].states;

    stateSelect.innerHTML = "";
    const def=document.createElement("option");
    def.textContent="Select a State";
    stateSelect.appendChild(def);
    
    states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
    stateSelect.removeAttribute("disabled");

    citySelect.innerHTML = "Select CIty";
    
}

function updateCities() {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const selectedCountry = document.getElementById("country").value;
    const selectedState = stateSelect.value;

    const cities = countryStateData[selectedCountry].cities[selectedState];

    citySelect.innerHTML = "";
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
    citySelect.removeAttribute("disabled");
}
