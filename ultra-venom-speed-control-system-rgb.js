let temspeed;
if (temperature > 90) {
    temspeed = 3200;
} else if (temperature > 70) {
    temspeed = 1600;
} else if (temperature > 40) {
    temspeed = 800;
} else {
    temspeed = 0;
}

const fanSpeed = temspeed;