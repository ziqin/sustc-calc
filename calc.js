
function CalcViewModel() {
    var self = this;
    
    //data
    self.ncee = ko.observable(0);

    self.calcs2=function() {
        return 10;
    }

    //computed
    self.finalScore = ko.computed(function () {
        return Num(self.ncee()) + self.calcs2();
    },self);
}

ko.applyBindings(new CalcViewModel());