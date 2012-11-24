
require.config({
    baseUrl: '/js/'
});

require(['mo/lang'], function(_){

    var origin = {
        obj_A: {
            a: 1,
            b: [1, null]
        },
        obj_B: {
            x: 1,
            y: {
                a: null
            }
        },
        arr_A: [
            1, 
            '2', 
            3, 
            [
                { 
                    a: 1, 
                    b: 2 
                }, 
                { 
                    x: 1, 
                    y: 2 
                }
            ], 
            { 
                '1': 1, 
                '2': 2 
            }
        ],
        str_A: 'a',
        str_B: 'b',
        num_A: 1,
        num_B: 0,
        null_A: null,
        undef_A: undefined
    };

    var origin_copy1 = _.copy(origin, 3);
    var origin_copy2 = _.copy(origin, 3);
    var origin_copy3 = _.copy(origin, 3);

    var obj1 = {
        obj_A: {
            a: 10,
            b: [10]
        },
        obj_B: {
            y: {
                a: 10,
                b: 10
            },
            z: 10
        },
        arr_A: [
            10, 
            null, 
            null, 
            [
                null, 
                { 
                    x: 10, 
                    z: 20
                }
            ], 
            { 
                '3': 3 
            }
        ],
        str_A: 'new a',
        num_A: 10,
        undef_A: undefined
    };

    var obj2 = {
        str_A: null,
        str_B: 'new b',
        str_C: 'new c',
        num_B: null,
        num_C: 3,
        arr_A: [
            '2',
            10,
            null,
            origin_copy1.arr_A[3]
        ]
    };

    var list1 = [1, 2, 0, "4", false, [3, 3, 4], null, undefined, 0, '0', "false", 4, "4", null, obj2, origin_copy1, origin, obj2];

    console.group('prepare');
    console.info('origin: ', origin);
    console.info('obj1: ', obj1);
    console.info('obj2: ', obj2);
    console.info('list1: ', list1);
    console.groupEnd('prepare');

    console.group('test case 1: ', '_.copy(origin) === origin');
    console.info(_.copy(origin) === origin);
    console.groupEnd('test case 1: ');

    console.group('test case 2: ', '_.copy(origin, 3) === origin');
    console.info(_.copy(origin, 3) === origin);
    console.groupEnd('test case 2: ');

    console.group('test case 3: ', '_.copy(origin).arr_A[3][0] === origin.arr_A[3][0]');
    console.info(_.copy(origin).arr_A[3][0] === origin.arr_A[3][0]);
    console.groupEnd('test case 3: ');

    console.group('test case 4: ', '_.copy(origin, 3).arr_A[3][0] === origin.arr_A[3][0]');
    console.info(_.copy(origin, 3).arr_A[3][0] === origin.arr_A[3][0]);
    console.groupEnd('test case 4: ');

    console.group('test case 5: ', '_.mix(_.copy(origin, 3), obj1, obj2, 3)');
    console.info(_.mix(_.copy(origin, 3), obj1, obj2, 3));
    console.groupEnd('test case 5: ');

    console.group('test case 6: ', '_.merge(_.copy(origin, 3), obj1, obj2, 3)');
    console.info(_.merge(_.copy(origin, 3), obj1, obj2, 3));
    console.groupEnd('test case 6: ');

    console.group('test case 7: ', '_.interset(origin_copy1, obj2, 1)');
    console.info(_.interset(origin_copy1, obj2, 1));
    console.groupEnd('test case 7: ');

    console.group('test case 8: ', '_.occupy(origin_copy2, obj2, 3) === origin_copy2');
    console.info(_.occupy(origin_copy2, obj2, 3) === origin_copy2);
    console.info('origin_copy2: ', origin_copy2);
    console.groupEnd('test case 8: ');

    console.group('test case 9: ', '_.config({ str_A: "a", num_D: 1 }, obj1, obj2, 3)');
    console.info(_.config({ str_A: "a", num_D: 1 }, obj1, obj2, 3));
    console.groupEnd('test case 8: ');

    console.group('test case 10: ', '_.unique(_.copy(list1, 1), 4)');
    console.info(_.unique(_.copy(list1), 4));
    console.groupEnd('test case 10: ');

});

