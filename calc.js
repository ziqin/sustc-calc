
function CalcViewModel() {
    var self = this;

    //data
    self.ncee = ko.observable();
    self.cbt = ko.observable();
    self.inv = ko.observable();

    self.pol = ko.observable(25);
    self.his = ko.observable(25);
    self.geo = ko.observable(25);


    //behaviors
    self.setPol = function (score) {
        self.pol(score);
    };

    self.setHis = function (score) {
        self.his(score);
    };

    self.setGeo = function (score) {
        self.geo(score);
    };

    //computed
    self.finalScore = ko.computed(function () {
        var s2t = Number(self.pol()) + Number(self.his()) + Number(self.geo());

        var result = Number(self.ncee()) * 60 / 750 +
               Number(self.cbt()) * 25 / 100 +
               Number(self.inv()) +
               s2t / 7.5;
        return result.toFixed(2);
    }, self);

    self.isFinished = ko.computed(function () {
        var ncee = Number(self.ncee());
        var cbt = Number(self.cbt());
        var inv = Number(self.inv());

        var isNceeVaild = ncee <= 750 && ncee >= 0 && self.ncee() != "";
        var isCbtVaild = cbt <= 100 && cbt >= 0 && self.cbt() != "";
        var isInvVaild = inv <= 750 && inv >= 0 && self.inv() != "";
        return isNceeVaild && isCbtVaild && isInvVaild;
    }, this);
}

ko.applyBindings(new CalcViewModel());