const confirmBtn = document.querySelector('.confirmBtn');
confirmBtn.addEventListener('click', handleConfirmDatas);

function handleConfirmDatas() {
  const inputName = document.querySelector('.inputName');
  const inputCardNumber = document.querySelector('.inputCardNumber');
  const inputMonthDate = document.querySelector('.inputMonthDate');
  const inputYearDate = document.querySelector('.inputYearDate');
  const inputCvc = document.querySelector('.inputCvc');

  if (
    inputName.value.trim() !== '' && 
    inputCardNumber.value.trim() !== '' && inputCardNumber.value.length === 16 &&
    inputCvc.value.trim() !== '' && inputCvc.value.length === 3 &&
    inputMonthDate.value.trim() !== '' && inputMonthDate.value.length === 2 &&
    inputYearDate.value.trim() !== '' && inputYearDate.value.length === 2
  ) {
   document.querySelector('.thankYou').classList.add('d-blok');
   document.querySelector('.input-section').classList.add('d-none'); 
   document.querySelector('.numberText').innerText = inputCardNumber.value.trim();
   document.querySelector('.nameText').innerText = inputName.value.trim();
   document.querySelector('.dateText').innerText = `${inputMonthDate.value.trim()}/${inputYearDate.value.trim()}`;
   document.querySelector('.cvcText').innerText = inputCvc.value.trim();
  }
  else {
    const inputs = [
      document.querySelector('.nameText'),
      document.querySelector('.numberText'),
      document.querySelector('.dateText'),
      document.querySelector('.cvcText')
    ];
    inputs.forEach(input => {
      if (input.innerText === '') {
        input.classList.add('invalid-input');
      } else {
        input.classList.remove('invalid-input'); 
      }
    });
  }

  // else {
  // alert('yanlış ya da eksik bilgi girdiniz, kontrol ediniz!');
  // }

}

/*else {
    const inputs = [
      document.querySelector('.nameText'),
      document.querySelector('.numberText'),
      document.querySelector('.monthText'),
      document.querySelector('.yearText'),
      document.querySelector('.securityNumberText')
    ];
    inputs.forEach(input => {
      if (input.innerText === '') {
        input.classList.add('invalid-input');
      } else {
        input.classList.remove('invalid-input'); 
      }
    });
  } */
 /*
 inputs.forEach(input => {
      if (input.value === '') {
        input.classList.add('invalid-input');
      } else {
        input.classList.remove('invalid-input'); 
      }
    }); */