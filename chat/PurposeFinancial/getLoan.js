data = {
  data: {
    customer: {
      customerId: '2176806',
      posCode: 'QFUND_X',
      purposeId: '01425273-ebd1-481b-8b0d-e6d9c19a4908',
      address: null,
    },
    paydayList: [
      {
        ivrUniqueId: '46523848891',
        posCode: 'QFUND_X',
        loanNumber: '4652384',
        loanAmount: '500.00',
        originationDate: '2018-09-07',
        centerNumber: '1363',
        customerId: '2176806',
        loanBalance: '454.15',
        payoffAmountIfPaidToday: '454.15',
        loanType: 'PDL',
        loanStatus: 'WO',
        allowCardPayment: true,
        allowPartialPayment: true,
        loanDueDate: '2018-09-21',
        paymentPlanDueDate: '',
        noOfDaysPastDue: '1575',
        returnLimitExceeded: false,
      },
      {
        ivrUniqueId: '48701568891',
        posCode: 'QFUND_X',
        loanNumber: '4870156',
        loanAmount: '550.00',
        originationDate: '2018-09-08',
        centerNumber: '6853',
        customerId: '2176806',
        loanBalance: '649.60',
        payoffAmountIfPaidToday: '649.60',
        loanType: 'PDL',
        loanStatus: 'WO',
        allowCardPayment: true,
        allowPartialPayment: true,
        loanDueDate: '2018-09-21',
        paymentPlanDueDate: '',
        noOfDaysPastDue: '1575',
        returnLimitExceeded: false,
      },
    ],
    installmentList: null,
    locList: null,
    titleList: null,
  },
  errors: null,
  meta: null,
};

function getLoan(data, listName, dataElement) {
  // Parse response
  // data = JSON.parse(data);
  // Return object, example: {list:paydayList,loanNumber:
  console.log(data);
  console.log(data.data[listName][dataElement].loanNumber);
  return {
    list: listName,
    ivrUniqueId: data.data[listName][dataElement].ivrUniqueId,
    posCode: data.data[listName][dataElement].posCode,
    loanNumber: data.data[listName][dataElement].loanNumber,
    loanAmount: data.data[listName][dataElement].loanAmount,
    originationDate: data.data[listName][dataElement].originationDate,
    centerNumber: data.data[listName][dataElement].centerNumber,
    loanBalance: data.data[listName][dataElement].loanBalance,
    payoffAmountIfPaidToday:
      data.data[listName][dataElement].payoffAmountIfPaidToday,
    loanType: data.data[listName][dataElement].loanType,
    loanStatus: data.data[listName][dataElement].loanStatus,
    allowCardPayment: data.data[listName][dataElement].allowCardPayment,
    allowPartialPayment: data.data[listName][dataElement].allowPartialPayment,
    loanDueDate: data.data[listName][dataElement].loanDueDate,
    paymentPlanDueDate: data.data[listName][dataElement].paymentPlanDueDate,
    noOfDaysPastDue: data.data[listName][dataElement].noOfDaysPastDue,
    returnLimitExceeded: data.data[listName][dataElement].returnLimitExceeded,
  };
}
getLoan(data, 'paydayList', 1);
