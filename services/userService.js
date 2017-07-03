angular.module('userService', [])
    .service('Users', function ($filter) {
        this.users = [{ "id": 1, "name": "Amit", "phone": "+123440044", "email": "abc@xyz.com", "policyNo": "088888888" },
        { "id": 2, "name": "Shiven", "phone": "+123440041", "email": "abc1@xyz.com", "policyNo": "0999999" },
        { "id": 3, "name": "Mamta", "phone": "+123440042", "email": "abc2@xyz.com", "policyNo": "011111111" },
        { "id": 4, "name": "Ruth", "phone": "+123440043", "email": "abc3@xyz.com", "policyNo": "011111112" },
        { "id": 5, "name": "Niles", "phone": "+123440045", "email": "abc4@xyz.com", "policyNo": "088888889" },
        { "id": 6, "name": "Marley", "phone": "+123440046", "email": "abc6@xyz.com", "policyNo": "088888878" },
        { "id": 7, "name": "Kritika", "phone": "+123440047", "email": "abc7@xyz.com", "policyNo": "088888856" },
        { "id": 8, "name": "Pooh", "phone": "+123440048", "email": "abc8@xyz.com", "policyNo": "088888812" },
        { "id": 9, "name": "Lauraine", "phone": "+123440049", "email": "abc9@xyz.com", "policyNo": "011111110" },
        { "id": 10, "name": "Mardul", "phone": "+123440050", "email": "abc0@xyz.com", "policyNo": "011111122" },
        { "id": 11, "name": "Mohan", "phone": "+1234400451", "email": "abc01@xyz.com", "policyNo": "011111133" },
        { "id": 12, "name": "Shri", "phone": "+1234400452", "email": "abc02@xyz.com", "policyNo": "011111144" },
        { "id": 13, "name": "Lavneet", "phone": "+123440053", "email": "abc03@xyz.com", "policyNo": "011111155" },
        { "id": 14, "name": "Pia", "phone": "+123440054", "email": "abc04@xyz.com", "policyNo": "011111100" },
        { "id": 15, "name": "Gaourav", "phone": "+123440055", "email": "abc05@xyz.com", "policyNo": "011111128" },
        { "id": 16, "name": "Sahil", "phone": "+123440056", "email": "abc06@xyz.com", "policyNo": "019811112" },
        { "id": 17, "name": "Yushuf", "phone": "+123440057", "email": "abc07@xyz.com", "policyNo": "078112012" },
        { "id": 18, "name": "Ekta", "phone": "+123440058", "email": "abc08@xyz.com", "policyNo": "066911112" },
        { "id": 19, "name": "Seema", "phone": "+123440059", "email": "abc09@xyz.com", "policyNo": "011111187" },
        { "id": 20, "name": "Lokesh", "phone": "+123440060", "email": "abd@xyz.com", "policyNo": "011761112" },
        { "id": 21, "name": "Mahesh", "phone": "+123440061", "email": "abd1@xyz.com", "policyNo": "011116512" },
        { "id": 22, "name": "Mahnedra", "phone": "+123440062", "email": "abd2@xyz.com", "policyNo": "011115412" },
        { "id": 23, "name": "Rekha", "phone": "+123440063", "email": "abcd3@xyz.com", "policyNo": "011111682" },
        { "id": 24, "name": "Raju", "phone": "+123440064", "email": "abcd4@xyz.com", "policyNo": "011111672" },
        { "id": 25, "name": "David", "phone": "+123440065", "email": "abd5@xyz.com", "policyNo": "011111452" },
        { "id": 26, "name": "Rana", "phone": "+123440066", "email": "abd6@xyz.com", "policyNo": "011111232" },
        { "id": 27, "name": "Vivek", "phone": "+123440067", "email": "abd7@xyz.com", "policyNo": "011119912" },
        { "id": 28, "name": "Ashok", "phone": "+123440068", "email": "abd8@xyz.com", "policyNo": "011111882" },
        { "id": 29, "name": "Ashish", "phone": "+123440069", "email": "abd9@xyz.com", "policyNo": "017711112" },
        { "id": 30, "name": "Swapnil", "phone": "+123440070", "email": "abd0@xyz.com", "policyNo": "011111662" },
        { "id": 31, "name": "Sherry", "phone": "+123440071", "email": "abe@xyz.com", "policyNo": "011551112" },
        { "id": 32, "name": "Subhash", "phone": "+123440072", "email": "abe1@xyz.com", "policyNo": "011114412" },
        { "id": 33, "name": "Swapnil", "phone": "+123440073", "email": "abe2@xyz.com", "policyNo": "022111112" },
        { "id": 34, "name": "Navnneet", "phone": "+123440074", "email": "abe3@xyz.com", "policyNo": "011133112" }]

        this.getUser = function (userKey) {
            var searchedUsers = [];
            if (userKey && userKey.length > 0) {
                searchedUsers = $filter('filter')(this.users, { name: userKey })
            }
            if (userKey && userKey.length > 0 &&  searchedUsers.length === 0) {
                searchedUsers = $filter('filter')(this.users, { policyNo: userKey });
            }
            return { searchedUsers };
        }
    });