let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 Street, 2nd Floor ABC Building'
}

export const {country, city, ...detail} = address
console.log(detail);
