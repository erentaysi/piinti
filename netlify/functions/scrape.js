const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { urun } = event.queryStringParameters;
  
  try {
    // Trendyol scraping örneği
    const response = await fetch(`https://www.trendyol.com/sr?q=${encodeURIComponent(urun)}`);
    const html = await response.text();
    
    // Basit bir örnek - gerçek scraping için daha detaylı kod gerekir
    const fiyatlar = [
      { magaza: "Trendyol", fiyat: "₺1.299", urun: urun },
      { magaza: "Hepsiburada", fiyat: "₺1.275", urun: urun },
      { magaza: "n11", fiyat: "₺1.310", urun: urun }
    ];
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fiyatlar)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Scraping hatası" })
    };
  }
};
