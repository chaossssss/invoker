  computed: {
    NewRiskLevel() {
      return JSON.parse(JSON.stringify(this.RiskLevel));
    },
  },
  watch: {
    TotalRiskNum(newVal, oldVal) {
      this.OldTotalRiskNum = oldVal;
    },
    NewRiskLevel: {
      handler(newVal, oldVal) {
        console.log("oldVal", oldVal);
        if (oldVal != undefined) {
          this.OldRiskLevel = oldVal;
        }
      },
      immediate: true,
      deep: true,
    },
  },


      _this.RiskLevel = json;
