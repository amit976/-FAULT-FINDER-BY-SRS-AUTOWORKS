function showProblem(problem){

    let result = document.getElementById("result");

    if(problem === "start"){

        result.innerHTML = `

            <h2>Car Not Starting Diagnosis</h2>

            <p>Is self motor cranking?</p>

            <button onclick="startingStep1('yes')">
                YES
            </button>

            <button onclick="startingStep1('no')">
                NO
            </button>

        `;
    }

    else if(problem === "ac"){

        result.innerHTML = `

            <h2>AC Diagnosis</h2>

            <p>Is AC cooling working?</p>

            <button onclick="acStep1('yes')">
                YES
            </button>

            <button onclick="acStep1('no')">
                NO
            </button>

        `;
    }

}






function startingStep1(answer){

    let result = document.getElementById("result");

    if(answer === "yes"){

        result.innerHTML = `

            <h2>Fuel Check</h2>

            <p>Is fuel reaching engine?</p>

            <button onclick="fuelCheck('yes')">
                YES
            </button>

            <button onclick="fuelCheck('no')">
                NO
            </button>

        `;
    }

    else{

        result.innerHTML = `

            <h2>Possible Faults</h2>

            <ul>

                <li>Battery weak</li>

                <li>Self motor faulty</li>

                <li>Loose battery terminal</li>

            </ul>

            <button onclick="goHome()">
                ← Back
             </button>

        `;
    }

}






function fuelCheck(answer){

    let result = document.getElementById("result");

    if(answer === "yes"){

        result.innerHTML = `

            <h2>Ignition Check</h2>

            <p>Is spark available?</p>

            <button onclick="sparkCheck('yes')">
                YES
            </button>

            <button onclick="sparkCheck('no')">
                NO
            </button>

        `;
    }

    else{

        result.innerHTML = `

            <h2>Possible Faults</h2>

            <ul>

                <li>Fuel pump faulty</li>

                <li>Injector blocked</li>

                <li>Fuel relay issue</li>

            </ul>

            <button onclick="goHome()">
                ← Back
            </button>

        `;
    }

}






function sparkCheck(answer){

    let result = document.getElementById("result");

    if(answer === "yes"){

        result.innerHTML = `

            <h2>Possible Faults</h2>

            <ul>

                <li>Engine compression issue</li>

                <li>Timing issue</li>

                <li>ECM sensor problem</li>

            </ul>

            <button onclick="goHome()">
                ← Back      
            </button>

        `;
    }

    else{

        result.innerHTML = `

            <h2>Possible Faults</h2>

            <ul>

                <li>Ignition coil faulty</li>

                <li>Spark plug damaged</li>

                <li>Crank sensor issue</li>

            </ul>

            <button onclick="goHome()">
                ← Back      
            </button>

        `;
    }

}






function acStep1(answer){

    let result = document.getElementById("result");

    if(answer === "yes"){

        result.innerHTML = `

            <h2>Possible Fault</h2>

            <ul>

                <li>Low cooling efficiency</li>

                <li>Cabin filter blocked</li>

            </ul>

            <button onclick="goHome()">
                ← Back
            </button>

        `;
    }

    else{

        result.innerHTML = `

            <h2>Possible Faults</h2>

            <ul>

                <li>Low AC gas</li>

                <li>Compressor problem</li>

                <li>Cooling fan issue</li>

            </ul>

            <button onclick="goHome()">
                ← Back
            </button>

        `;
    }

}






function goHome(){

    location.reload();

}