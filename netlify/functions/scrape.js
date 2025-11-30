exports.handler = async (event) => {
  const { urun } = event.queryStringParameters;
  
  // Basit test verisi - scraping olmadan
  const fiyatlar = [
    { magaza: "Trendyol", fiyat: "₺1.299", urun: urun || "test" },
    { magaza: "Hepsiburada", fiyat: "₺1.275", urun: urun || "test" },
    { magaza: "n11", fiyat: "₺1.310", urun: urun || "test" }
  ];
  
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fiyatlar)
  };
};
