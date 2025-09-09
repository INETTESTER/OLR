import http from 'k6/http';

// ฟังก์ชันตาม path สุดท้าย: "search.php"
export function search() {
    const url = 'https://testolr2.thaijobjob.com/2025074/search.php';

    // payload แบบ form-data
    const payload = {
        ac: "result",
        CustomerID: "1102002481820",
        TelMobile: "0830197004",
        BirthDate: "01/01/2539",
    };

    const params = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    const res = http.post(url, payload, params);

    //console.log(res.body); // log response body
    return res;            // return response
}
