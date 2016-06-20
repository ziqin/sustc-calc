
function CalcViewModel() {
    var self = this;

    //data
    self.ncee = ko.observable(580);
    self.cbt = ko.observable(70);
    self.inv = ko.observable(5);

    self.pol = ko.observable(25);
    self.his = ko.observable(25);
    self.geo = ko.observable(25);

    self.calcs2 = function () {
        return 10;
    }

    //computed
    self.finalScore = ko.computed(function () {
        var s2t = Number(self.pol()) + Number(self.his()) + Number(self.geo());

        return Number(self.ncee()) * 60 / 750 +
               Number(self.cbt()) * 25 / 100 +
               Number(self.inv()) +
               s2t / 7.5;
    }, self);
}

ko.applyBindings(new CalcViewModel());