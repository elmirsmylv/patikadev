const yaricap = process.argv[2];

const alanHesapla = (yaricap) => {
  let pi = 3.14;

  let result = pi * yaricap ** 2;

  console.log(result);
  return result;
};

alanHesapla(yaricap);

