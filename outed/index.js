function outed(meet, boss) {
    if (meet[boss] <= 5) {
        return 'Get Out Now!';
    } else {
        return 'Nice Work Champ!';
    }
}

outed({ 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }, 'katie');
