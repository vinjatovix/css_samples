'use strict';

const segundero = document.querySelector('.segundos');
const minutero = document.querySelector('.minutos');
const horario = document.querySelector('.horas');

function setDate() {
  const now = new Date();
  const fase = 90;
  const segundos = now.getSeconds();
  const gradosSegundos = (segundos / 60) * 360 + fase;
  const minutos = now.getMinutes();
  const gradosMinutos = (minutos / 60) * 360 + (segundos / 60) * 6 + fase;
  const horas = now.getHours();
  const gradosHoras = (horas / 12) * 360 + (minutos / 60) * 30 + fase;

  segundero.style.transform = `rotate(${gradosSegundos}deg)`;
  minutero.style.transform = `rotate(${gradosMinutos}deg)`;
  horario.style.transform = `rotate(${gradosHoras}deg)`;
}

setInterval(setDate, 1000);

setDate();
