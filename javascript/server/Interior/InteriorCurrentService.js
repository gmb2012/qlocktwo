function InteriorCurrentService() {
    // read later from database

    return { temperature: Math.floor((Math.random() * 30) + 1), humidity: Math.random() };
}

module.exports = InteriorCurrentService;
