'use strict';const a615_0x2a94bc=a615_0x3c22;(function(_0x597464,_0x5ba0db){const _0x36caab=a615_0x3c22,_0x56c259=_0x597464();while(!![]){try{const _0x21c958=parseInt(_0x36caab(0x127))/0x1*(-parseInt(_0x36caab(0x132))/0x2)+parseInt(_0x36caab(0x121))/0x3+parseInt(_0x36caab(0x12b))/0x4*(-parseInt(_0x36caab(0x122))/0x5)+parseInt(_0x36caab(0x153))/0x6*(-parseInt(_0x36caab(0x134))/0x7)+parseInt(_0x36caab(0x128))/0x8+parseInt(_0x36caab(0x138))/0x9*(parseInt(_0x36caab(0x136))/0xa)+-parseInt(_0x36caab(0x12e))/0xb*(parseInt(_0x36caab(0x12f))/0xc);if(_0x21c958===_0x5ba0db)break;else _0x56c259['push'](_0x56c259['shift']());}catch(_0x53546e){_0x56c259['push'](_0x56c259['shift']());}}}(a615_0x35d0,0x554cb));Object[a615_0x2a94bc(0x14a)](exports,a615_0x2a94bc(0x143),{'value':!![]}),exports[a615_0x2a94bc(0x12d)]=void 0x0;const tslib_1=require(a615_0x2a94bc(0x144)),typedi_1=require('typedi'),typeorm_typedi_extensions_1=require('typeorm-typedi-extensions'),Logger_1=require(a615_0x2a94bc(0x142)),UserGroupRepository_1=require(a615_0x2a94bc(0x146)),typeorm_1=require(a615_0x2a94bc(0x130));function a615_0x3c22(_0x36b19f,_0x5476c5){const _0x35d008=a615_0x35d0();return a615_0x3c22=function(_0x3c2264,_0x5ae431){_0x3c2264=_0x3c2264-0x121;let _0x304f58=_0x35d008[_0x3c2264];return _0x304f58;},a615_0x3c22(_0x36b19f,_0x5476c5);}let UserGroupService=class UserGroupService{constructor(_0x3ce0f3,_0x2f15f2){const _0x1e581f=a615_0x2a94bc;this[_0x1e581f(0x123)]=_0x3ce0f3,this['log']=_0x2f15f2;}[a615_0x2a94bc(0x140)](_0x18d8d1){const _0x39f72d=a615_0x2a94bc;return this[_0x39f72d(0x133)]['info'](_0x39f72d(0x129)),this[_0x39f72d(0x123)][_0x39f72d(0x140)](_0x18d8d1);}[a615_0x2a94bc(0x135)](_0x4da058,_0x623952,_0x3755db=[],_0x3e7be7=[],_0x17190a){const _0x1b9249=a615_0x2a94bc,_0x2e07c2={};_0x3755db&&_0x3755db['length']>0x0&&(_0x2e07c2['select']=_0x3755db);_0x2e07c2['where']={};_0x3e7be7&&_0x3e7be7[_0x1b9249(0x125)]>0x0&&_0x3e7be7['forEach'](_0x1e90c5=>{const _0x64b75=_0x1b9249,_0x5ef09e=_0x1e90c5['op'];if(_0x5ef09e===_0x64b75(0x13c)&&_0x1e90c5[_0x64b75(0x152)]!==undefined)_0x2e07c2[_0x64b75(0x13c)][_0x1e90c5['name']]=_0x1e90c5[_0x64b75(0x152)];else _0x5ef09e===_0x64b75(0x131)&&_0x1e90c5[_0x64b75(0x152)]!==undefined&&(_0x2e07c2['where'][_0x1e90c5[_0x64b75(0x151)]]=(0x0,typeorm_1[_0x64b75(0x13b)])('%'+_0x1e90c5[_0x64b75(0x152)]+'%'));});_0x2e07c2[_0x1b9249(0x13f)]={'createdDate':_0x1b9249(0x149)};_0x4da058&&_0x4da058>0x0&&(_0x2e07c2[_0x1b9249(0x150)]=_0x4da058,_0x2e07c2[_0x1b9249(0x139)]=_0x623952);if(_0x17190a)return this[_0x1b9249(0x123)][_0x1b9249(0x13e)](_0x2e07c2);return this[_0x1b9249(0x123)][_0x1b9249(0x137)](_0x2e07c2);}['create'](_0x32c946){const _0x59587a=a615_0x2a94bc;return tslib_1[_0x59587a(0x14b)](this,void 0x0,void 0x0,function*(){const _0x350eaf=yield this['userGroupRepository']['save'](_0x32c946);return _0x350eaf;});}[a615_0x2a94bc(0x141)](_0x2c0559,_0x1a718a){const _0x385674=a615_0x2a94bc;return this[_0x385674(0x133)][_0x385674(0x14d)](_0x385674(0x12c)),_0x1a718a[_0x385674(0x126)]=_0x2c0559,this['userGroupRepository'][_0x385674(0x147)](_0x1a718a);}[a615_0x2a94bc(0x145)](_0x5cf944){return tslib_1['__awaiter'](this,void 0x0,void 0x0,function*(){const _0x2aeca6=a615_0x3c22;this['log'][_0x2aeca6(0x14d)](_0x2aeca6(0x14c));const _0x1bb30f=yield this['userGroupRepository'][_0x2aeca6(0x145)](_0x5cf944);return _0x1bb30f;});}};UserGroupService=tslib_1[a615_0x2a94bc(0x14f)]([(0x0,typedi_1[a615_0x2a94bc(0x148)])(),tslib_1['__param'](0x0,(0x0,typeorm_typedi_extensions_1[a615_0x2a94bc(0x13a)])()),tslib_1[a615_0x2a94bc(0x124)](0x1,(0x0,Logger_1[a615_0x2a94bc(0x14e)])(__filename)),tslib_1['__metadata'](a615_0x2a94bc(0x13d),[UserGroupRepository_1[a615_0x2a94bc(0x12a)],Object])],UserGroupService),exports[a615_0x2a94bc(0x12d)]=UserGroupService;function a615_0x35d0(){const _0x40b91d=['Like','where','design:paramtypes','count','order','findOne','update','../../../decorators/Logger','__esModule','tslib','delete','../repositories/UserGroupRepository','save','Service','DESC','defineProperty','__awaiter','Delete\x20a\x20role','info','Logger','__decorate','take','name','value','992724yrHzLV','256884TJRcvG','417940JQgsPA','userGroupRepository','__param','length','groupId','86322REjrEH','5471056fMYtmV','Find\x20role','UserGroupRepository','4JpqcJU','Update\x20a\x20role','UserGroupService','11JvQkMo','1409592iPfSOi','typeorm','like','6NVXAVK','log','7YDgCfw','list','2053510XISSxH','find','9RqOVpx','skip','OrmRepository'];a615_0x35d0=function(){return _0x40b91d;};return a615_0x35d0();}