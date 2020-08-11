export const domain =
  process.env.NODE_ENV === 'production'
    ? 'https://khacdauhuuha.com'
    : 'http://localhost:3000';

export const siteName = `Khắc dấu Hữu Hạ - TP. Mỹ Tho - Tiền Giang`;

export const siteDescription = `Khắc dâu Hữu Hạ với 20 năm kinh nghiệm, chuyên khắc các loại dấu tên, dấu chức danh, dấu tròn danh nghiệp,... cũng như cung cấp các vật liệu ngành dấu như mực dấu, tampon dấu,... Bên cạnh đó, cơ sở cũng cung nhận khắc chữ meka, làm bảng hiệu, bảng đeo tên, thẻ đại hội và cung cấp tượng bác bằng thạch cao, các loai cờ trang trí cho cơ quan, tổ chức doanh nghiệp.`;

export const siteImage = `${domain}/images/seo.png`;

// Google Analytics tracking code
export const gaCode = `UA-77390738-15`;
