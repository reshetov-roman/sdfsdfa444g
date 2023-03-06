class MyAchievements {
  constructor(progressBar, button) {
    this.progressBar = document.querySelectorAll(progressBar);
    this.button = document.querySelectorAll(button);
  }
  progressBars() {
    if(this?.progressBar) {
      this.progressBar.forEach(progressBar => {
        const progressPercent = +progressBar.dataset.progress,
              passedNumber = progressPercent > 0 ? 25 * (progressPercent/100) : 0,
              parent = progressBar.closest('.page-achievement-wrapper__list--item'),
              getBonus = parent.querySelector('.page-achievement-wrapper__list--change');
      
        if(progressPercent == 100) {
          getBonus.innerHTML = '<span class="page-achievement-wrapper__list--getbonus">Получить 1 000 бонусов</span>';
        }
        
        for (let i = 0; i <= 25; i++) {
          const square = document.createElement('span');
          square.classList.add('page-achievement-wrapper__list--square');
      
          if(progressPercent == 0) {
            parent.style.filter = "grayscale(100%)";
            parent.style.pointerEvents = 'none';
          }else if(i <= passedNumber) {
            square.classList.add('active-square');
          }else if(progressPercent != 100) {
            parent.style.pointerEvents = 'none';
          }
          
          if(progressPercent == 100) {
            square.classList.add('active-square-green');
          }
      
          progressBar.appendChild(square);
        }
      });
    }
  }

  buttonChange() {
    if(this?.button) {
      this.button.forEach(button => {
        button.addEventListener('click', e => {
          const parent = e.currentTarget,
          date = parent.querySelector('.page-achievement-wrapper__list--date'),
          getBonus = parent.querySelector('.page-achievement-wrapper__list--change');
          getBonus.innerHTML = '<span class="page-achievement-wrapper__list--bonus-received">Получено 1 000 бонусов</span>';
          date.style.opacity = 1;
        });
      });
    }
  }
}

const extendMyAchievements = new MyAchievements(
  '.page-achievement-wrapper__list--progress',
  '.page-achievement-wrapper__list--item'
  );

extendMyAchievements.progressBars();
extendMyAchievements.buttonChange();
