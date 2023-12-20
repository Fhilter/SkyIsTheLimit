const file1Div = document.getElementById('#solarSystemOrbits');                          
file1Div.insertAdjacentHTML('beforeend', `                                      
    <div> 
        <div class="sun"></div>
        <div class="mercury_orbit">
            <div class="mercury"></div>
        </div>
        <div class="venus_orbit">
            <div class="venus"></div>
        </div>
        <div class="earth_orbit">
            <div class="earth">
                <div class="moon_orbit">
                    <div class="moon"></div>
                </div>
            </div>
        </div>
        <div class="mars_orbit">
            <div class="mars"></div>
        </div>
        <div class="jupiter_orbit">
            <div class="jupiter"></div>
        </div>
        <div class="saturn_orbit">
            <div class="saturn">
                <div class="saturn_ring"></div>
            </div>
        </div>
        <div class="uranus_orbit">
            <div class="uranus"></div>
        </div>
        <div class="naptune_orbit">
            <div class="naptune"></div>
        </div>                                  
    </div>                                                                            
`);

