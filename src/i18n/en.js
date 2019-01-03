const InsufficientQuota = 'Insufficient Quota';
const StakeVITE = 'Stake VITE';
const Action = 'Action';
const SBPRegistration = 'SBP Registration';
const NodeName = 'Node Name';
const Voting = 'Voting';
const MyVoting = 'My Voting';

module.exports = {
    lang: 'EN',

    start: 'Start',
    login: 'Log in',
    logout: 'Logout',
    pow: 'Running PoW...',
    accountName: 'Account name',
    action: Action,
    addAccount: '添加账户',

    nav: {
        setting: 'Setting Account',
        reset: 'Account Reset',
        create: 'Create',
        noNet: 'No network detected',
        blockHeight: 'Snapshot Block Height'
    },

    errCode: {
        35003: '{name} ID conflict occurs, please re-submit later',
        35004: 'Built-in contract error, please try again later（35004）',
        35005: 'Transactions are sent too frequent, please try again later',
        35006: 'Built-in contract method not exist, please try again later（35006）',
        36001: 'You cannot make any transfer until you receive a transaction',
        36002: 'System verify failed, please try again later（36002）',
        36003: 'System verify failed, please try again later（36003）',
        36004: 'System verify failed, please try again later（36004）',
        36005: 'napshot block height is illegal, please try again later'
    },

    txType: {
        0: SBPRegistration,
        1: 'Update Registration',
        2: 'Revoke Registration',
        3: 'Retrieve Reward',
        4: Voting,
        5: 'Revoke Voting',
        6: 'Get TPS Quota',
        7: 'Withdrawal of Staking Quota',
        8: 'Token Issuance',
        9: 'Withdrawal of Staking Token',
        10: 'Transfer',
        11: 'Transfer',
        12: 'Transfer',
        13: 'Transfer',
        14: 'Transfer',
        15: 'Transfer'
    },

    //common
    btn: {
        cancel: 'Cancel',
        login: 'Login',
        imported: 'Import Account',
        back: 'Back',
        submit: 'Submit',
        next: 'Next Step',
        understand: 'I understand',
        edit: 'Edit',
        reReg: 'Re-register',
        otherProd: 'Use Other Products of Vite'
    },
    hint: {
        pwErr: 'Incorrect password!',
        pwEmpty: 'Password cannot be empty!',
        noData: 'No Data',
        err: 'Oops, error occurs',
        request: '{name} request has sent, please wait',
        copy: 'Successfully copied'
    },
    common: {
        sendTrans: 'Send Transaction',
        send: 'Send',
        stakingAmount: 'Staking Amount',
        submitStaking: 'Submit Staking',
        withdrawHeight: 'Expected Snapshot Height',
        balance: 'Balance',
        insufficientBalance: 'Insufficient balance'
    },

    beforeUse: {
        title: 'Read Before Use',
        text1: 'Please be sure to backup your seed phrase when creating account. We cannot guarantee the restoration of your assets in the instance that you visit a scam site or lose your private keys or seed phrase.',
        text2: 'Please note that our websites do not store your private keys or seed phrase. Therefore, you will need to restore your account via seed phrase if you decide to change browsers, clear local cookies, or change PCs.',
        text3: 'Please take proper precautions in ensuring that you accurately record and safely store your seed phrase. Even the slightest error will result in you not being able to successfully restore your address.',
    },
    preview: {
        t: 'Preview Version',
        txt1: 'The preview version of wallet is a lightweight-node wallet officially issued by VITE.',
        txt2: 'The current version supports functions of checking account balance, sending transactions, receiving transactions in default, acquiring test tokens, staking VITE tokens for TPS quota, SBP registration, vote and etc.',
        txt3: 'Support acquiring test tokens and experiencing the product by using them, the test tokens issued by VITE official can be only used for testing and with no actual value, it will be cleared by VITE official sporadically',
        v: 'Current version: {version}'
    },
    pwdConfirm: {
        conf: 'Open password-free mode within 5 minutes',
        title: 'Password',
        placeholder: 'Please input password of wallet'
    },
    quotaConfirmCancel: {
        title: InsufficientQuota,
        describe: 'You cannot {operate} due to insufficient TPS quota. You need to stake VITE for quota to {operate}',
        leftBtn: 'Not {operate} yet',
        rightBtn: StakeVITE
    },
    quotaConfirmPoW: {
        title: InsufficientQuota,
        content: 'your left quota turn out to be insufficient, you can acquire more quota by running PoW or staking VITE',
        leftBtn: {
            text: StakeVITE
        },
        rightBtn: {
            text: 'Run PoW'
        }
    },

    // mnemonic
    mnemonic: {
        title: 'Mnemonic',
        restore: 'Restore Account by Seed Phrase',
        record: 'Backup Seed Phrase',
        prompt: 'Mnemonic seed phrase is used to restore your wallet, better write it down and keep it in a safe place where only you can access, otherwise your assets will be at tremendous risks.',
        placeholder: 'Please input your mnemonic seed phrase',
        empty: 'The input of seed phrase cannot be empty',
        error: 'Incorrect seed phrase. Try again',
        hint: 'Mnemonic format: words, spaces, words... spaces, words.',
        netErr: 'The full node is abnormal, please try again later.',
        change: 'Switch to {len} Mnemonic Words'
    },

    // setting
    setting: {
        title: 'Settings',
        unlock: 'Unlock Secure Information',
        lang: 'Language',
        block: 'Current Height',
        version: 'Version',
        service: 'Customer Service',
        site: 'Official Website of Vite',
        sys: 'System Portal',
        open: 'Vite Github',
        addAddr: 'Add Address',
        addrList: 'Addresses of Accounts',
        setDefault: 'Select Default User'
    },

    //create account
    create: {
        input: 'Please input password',
        again: 'Please input password again!',
        choose: 'Choose account',
        finish: 'Done',
        hint: {
            nameInput: 'Please input account name',
            nameLong: 'Account name cannot exceed 32 characters!',
            long: 'Your input cannot exceed 32 characters!',
            name: 'Account name only supports Chinese, English, numbers and underscores',
            consistency: 'Please enter the same password!',
            pwFormat: 'Wrong password format. The password only supports English, half-width symbols, numbers.'
        }
    },

    // imported
    imported: {
        title: 'Import',
        dragDrop: {
            text: 'Drag and drop files there',
            err1: 'Imported illegal file!',
            err2: 'Only one file can be imported!',
            guide: 'Open folder to import',
            hint: 'Noted that login by importing keystore file cannot support creating multi addresses, using mnemonic seed phrase is recommended in cross-platform situations.'
        }
    },

    // account detail
    account: {
        title: 'Account Detail',
        transfer: 'Transfer',
        getTestToken: 'Get Test Tokens',
        transDetail: 'More Transaction Details',
        name: 'Account Name',
        address: 'My Address',
        fundFloat: 'Unreceived',
        pend: 'Pending',
        inAddress: 'Receive Address',
        sum: 'Amount',
        saveQrcode: 'Save QR code image',
        remarks: 'Comment',
        remarksLong: '{len} bytes left',
        placeholder: {
            amount: 'Please input amount',
            remarks: 'Please input comments',
            addr: 'Please input address'
        },
        hint: {
            token: 'VTT test tokens have be sent to your account, please check your account!',
            tErr: 'Get test token failed!',
            amount: 'Amount must be greater than 0'
        },
        trans: {
            powErr: 'Error occurs when running PoW, please try again',
            powTransErr: 'Insufficient quota of PoW, we\'d recommend that you stake VITE to obtain quota.'
        }
    },

    // quota
    quota: {
        title: 'Get Quota',
        help: {
            title: 'Quick Understanding of Quota'
        },
        myQuota: 'My Quota',
        maxTxNum: 'Maximum number of Txs',
        beneficialAddr: 'Quota Recipient Address',
        fromAddr: 'Deduction address',
        time: 'Staking Freeze Duration',
        aboutDays: 'Approx {day} days',
        amountPlaceholder: 'Please input staking amount, minimum 10 VITE',
        addrPlaceholder: 'Please input quota recipient address',
        inputWithdrawAmount: 'Please input withdraw amount',
        pledgeFail: 'Failed to Submit',
        canclePledgeFail: 'Failed',
        limitAmt: 'Staking amount should not be less than 10.',
        maturity: 'Staking has expired!',
        maxAmt: 'Withdraw amount should be in (0, {amount}]',
        withdrawalStaking: 'Withdrawal of Staked Token',
        confirm: {
            help: {
                t1: 'What is Quota?',
                txt1: 'In the Vite system, users do not purchase the gas required for a transaction by paying a fee, but acquire the computing resource through a quota-based model. Required quota for sending a transaction = the basic quota (request) + quota (the attached text data), quota required to accept a transaction = the basic quota (response). This quota-based resource configuration protocol allows users to obtain higher resource quotas in two ways: Staking VITE to obtain quota and running PoW.',
                t2: 'What is Staking?',
                txt2: 'In the Vite system, the user can stake VITE to obtain a certain amount of quota. The minimum value for staking is 10 VITE, and there is no maximum limit; meanwhile, Vite system also supports that the A-address stakes a part of the VITE and allocates the obtained quota to the B address. When users apply to stake, VITE will be sent to the smart contract address instead of another user, and only the user who applies for staking has access to manage the staking amount.',
                t3: 'What is PoW?',
                txt3: 'Proof of Work (PoW), is a protocol to confirm that you have done a certain amount of work, and is also an economic measure to deter DDoS attacks and other service abuse. It requires the initiator to conduct a certain amount of computing, which means that it may take some time for the computer. In the Vite system, users can obtain a free quota by running the PoW, and also can send a transaction without any annotated information through obtained quota.'
            },
            cancel: {
                describe: 'Your current staked amount is {amount} VITE, please confirm to withdraw.',
                rightBtn: 'Ready to go',
                leftBtn: 'Cancel withdraw'
            },
            submit: {
                describe: 'Make sure to stake {amount} VITE to obtain quota, you cannot withdraw until about 3 days after staking comes into effect.',
                rightBtn: 'Confirm',
                leftBtn: 'Cancel'
            }
        },
        list: {
            title: 'My Staking List',
            total: 'Staking {amount} VITE in total',
            amount: 'Amount',
            withdrawTime: 'Expected Due Date',
            unexpired: 'Temporarily cannot make withdrawal of staked token until due date'
        }
    },

    // Transaction List
    transList: {
        title: 'Transactions',
        tType: {
            title: 'Type',
            symbol: 'Type'
        },
        status: {
            title: 'Status',
            unconfirmed: 'Unconfirmed',
            confirms: 'Confirming',
            confirmed: 'Confirmed',
        },
        valid: {
            addr: 'Address format error',
            amt: 'Amount format error',
            succ: 'Transaction successful!'
        },
        timestamp: 'Timestamp',
        tAddress: 'Address',
        tAddr: 'Address',
        sum: 'Amount'
    },

    // SBP
    SBP: {
        title: SBPRegistration,
        reward: 'Retrieval of SBP rewards',
        register: SBPRegistration,
        cancel: 'SBP Cancellation',
        cancelBtn: 'Cancel',
        help: {
            title: 'About SBP',
            text: 'SBP（Snapshot Block Producer）is a node that has right to create blocks, you can register to become a SBP candidate by staking a certain amount of VITE, each round (about 75 seconds) will elect 25 SBPs, the SBPs will be elected from random 23 out of top 25 candidate nodes, plus random 2 out of the candidate nodes ranking 26th-100th on the list. The 50% of block creation rewards will be allocated to the block creation node, the other 50% will be allocated to nodes that are ranked on top 100 as voting rewards. <br/><br/> One registration address (staking address) can register multiple block creation nodes (node names), a node name cannot be used if the node name has been registered by a registration address. A node name can switch block creation address, however, block creation address cannot be reused by other node names.'
        },
        confirm: {
            title: 'Registration of SBP candidates',
            describe: 'The {amount} VITE of current address will be locked about 90 days when you submit the registration,  the amount will be returned to staking address after being unlocked',
            leftBtn: 'Not register yet',
            rightBtn: 'Ready to register',
            edit: {
                title: 'Change block creation address',
                placeholder: 'please input new block creation address',
                btn: 'Confirm to change'
            },
            reward: {
                amount: '本次可提奖励金额（约）',
                hint: '为了您的资金安全，接收出块奖励地址应尽量与出块地址不同',
                time: '本次可提时间范围'
            }
        },
        section1: {
            title: 'Registration Form',
            nodeName: NodeName,
            producerAddr: 'Block Creation Address',
            quotaAddr: 'Staking Address',
            quotaTime: 'Staking Period',
            allReward: 'All of the retrievable block creation rewards',
            time: '7776000 snapshot blocks（approximately 90 days）',
            confirmBtn: 'Submit',
            namePlaceholder: 'Please input node name',
            nameHint: 'Within 40 characters, support English letters (both upper and lower cases), numbers, \'_\'、\'.\'',
            nameErr: 'This node name is illegal',
            nameUsed: 'This node name is occupied',
            addrPlaceholder: 'Please input snapshot block creation address',
            addrHint: 'The block creation address must be a full node and keep up running',
            addrErr: 'Illegal address',
            addrUsed: 'This address has been occupied',
            registerSuccess: 'Registration request has sent',
            registerFail: 'Registration request failed'
        },
        section2: {
            title: 'Registration Information',
            updateSuccess: 'Modify request has sent',
            updateFail: 'Failed to send modify request',
            rewardSuccess: 'Request of Rewards retrieval has sent',
            rewardFail: 'Failed to send the request of rewards retrieving',
            cancelSuccess: 'Revoking request has sent',
            cancelFail: 'Failed to send revoking request',
            nowReward: 'The range of snapshot block height and reward that can be requested at this time',
            rewardAddr: 'Retrieval Address',
            expireDate: 'Expire Date: {time}',
            cancelConfirm: {
                title: 'Revoke registration of SBP',
                describe: 'The staking amount will be returned back to your staking address after revoking, you have to re-submit the registration to become a SBP'
            }
        }
    },

    // vote
    vote: {
        toReward: 'View my rewards',
        title: Voting,
        Voting,
        search: 'Please input node name or block creation address',
        help: {
            title: 'About Voting',
            text: 'You can join and vote for 25 SBPs （Snapshot Block Producer), each round of voting lasts 75s, the polls you can use for voting are equivalent to the amount of VITE tokens owned by voting address, the default selection is the choice of previous round, the SBPs will be chosen from random 23 out of top 25 candidate nodes, plus random 2 out of the candidate nodes ranking 26th-100th on the list, 25 SBPs in total.',
        },
        addrNoExistErr:'You aren\'t able to vote for now as your address has no transaction record before',
        revokeVoting: 'Revoke voting',
        section1: {
            title: MyVoting,
            head: ['Name', 'Status', MyVoting, 'Status of Voting', Action],
            nodeStatusMap: {
                1: 'Active',
                2: 'Inactive'
            },
            voteStatusMap: {
                voted: 'Voting Successful',
                voting: 'Voting',
                canceling: 'Under revoking',
                voteNotWork: 'Revoked voting'
            },
            hoverHelp: 'The node {nodeName} you are voted for has been revoked, you may vote again directly or revoke your voting, If you do not do so, your original voting result will be recovered after the {nodeName} re-registering',
            confirm: {
                cancelText: 'Confirm',
                submitText: 'Not yet'
            },
            toast: 'Revoking request has sent',
            operateBtn: 'Revoke',
            cancelVoteErr:'Failed to revoke voting, please try again'
        },
        section2: {
            title: 'SBP candidates',
            head: ['Rank', NodeName, 'Address', 'Votes', Action],
            confirm: {
                normal: {
                    content: 'You can vote for only one SBP, are you sure you want to vote for {name}?',
                    cancelText: 'Not yet',
                    submitText: 'Ready to vote',
                },
                cover: {
                    content: 'You\'ve already voted for {nodeName}, are you sure to overwrite current voting record?',
                    cancelText: 'Confirm',
                    submitText: 'Cancel'
                }
            },
            toast: 'The voting request has sent',
            noSearchData:'No content found, please try another input',
            operateBtn: 'Vote',
            voteErr: 'Failed to vote, please try again'
        }
    },

    // exchangeVite
    exchangeVite: {
        title: 'VITE Conversion',
        gas: 'Mining Fee',
        record: 'Conversion History',
        aboutPrice: 'Approx {amount} ETH',
        note: 'Please wait in patient after submitting the conversion. You cannot receive the converted VITE until you have got 30 Ethereum transaction confirmations. Ehtereum transaction records can be viewed in Conversion History section.',
        help: {
            title: 'Quick Understanding of VITE Conversion',
            text: 'You can migrate ERC20 tokens into VITE into our TestNet by VITE conversion function. In TestNet, casting your vote for official SBPs to collect rewards, the annualized rate can reach 20%. Your ERC20 VITE tokens will be transferred to Ethereum black hole address: {blackAddr}, you will receive the same amount of VITE at your Vite address when Ethereum black hole address has received the transaction and confirmed. Once you are in the conversion process, confirm that there are enough VITE and ETH (as gas) in your Ethereum address of Vite wallet.'
        },
        exchange: {
            vite: 'Convert',
            viteAddr: 'Receiving Address',
            viteAmount: 'Conversion Amount',
            gas: 'Mining Fee',
            btn: 'Ready to Convert',
            success: 'Conversion Successful. It may take approx 20 minutes to get VITE into your account after the Ethereum transaction is confirmed.'
        }
    }
};
