const timer = (selector, deadLine) => {
    const addZero = (num) => {
        if (num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    
    const getTimeRemaining = (endTime) => {
        const time = Date.parse(endTime) - Date.parse(new Date()),
          seconds = (Math.floor(time / 1000) % 60),
          minutes = (Math.floor((time / 1000 / 60) % 60)),
          hours = (Math.floor((time / 1000 / 60 / 60) % 24)),
          days = (Math.floor((time / 1000 / 60 / 60 / 24)));

          return {
            total: time,
            seconds,
            minutes,
            hours,
            days
          }
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

              updateClock();

        function updateClock(){
            const time = getTimeRemaining(endTime);
            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            };
        };
    };
    
    setClock(selector, deadLine);
};

export default timer;