export default {
    "Supplier": {
        "Id": 117,
        "Columns": [{
            "Id": 527,
            "column_name": "SSupplierNumber",
            "column_description": "供应商编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "SupplierNumber"
        }, {
            "Id": 528,
            "column_name": "SSupplierName",
            "column_description": "供应商名称",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "SupplierName"
        }, {
            "Id": 529,
            "column_name": "SCommonModeOfContact",
            "column_description": "联系方式",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "CommonModeOfContact"
        }, {
            "Id": 530,
            "column_name": "SOfficeLocation",
            "column_description": "办公地点",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "OfficeLocation"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "Supplier",
        "table_name_en": "Supplier",
        "table_name_ch": "供应商",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "Cargo": {
        "Id": 118,
        "Columns": [{
            "Id": 531,
            "column_name": "CCargoNumber",
            "column_description": "货物编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "CargoNumber"
        }, {
            "Id": 532,
            "column_name": "CNameOfGoods",
            "column_description": "货物名称",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "NameOfGoods"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "Cargo",
        "table_name_en": "Cargo",
        "table_name_ch": "货物",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "Staffname": {
        "Id": 119,
        "Columns": [{
            "Id": 533,
            "column_name": "SJobNumber",
            "column_description": "工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "JobNumber"
        }, {
            "Id": 534,
            "column_name": "SName",
            "column_description": "姓名",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Name"
        }, {
            "Id": 535,
            "column_name": "SEducation",
            "column_description": "学历",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Education"
        }, {
            "Id": 536,
            "column_name": "SCommonModeOfContact",
            "column_description": "联系方式",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "CommonModeOfContact"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "Staffname",
        "table_name_en": "Staffname",
        "table_name_ch": "员工",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "GoodsShelves": {
        "Id": 120,
        "Columns": [{
            "Id": 537,
            "column_name": "GSShelfNumber",
            "column_description": "货架编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "ShelfNumber"
        }, {
            "Id": 538,
            "column_name": "GSCapacity",
            "column_description": "容量",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Capacity"
        }, {
            "Id": 539,
            "column_name": "GSLocality",
            "column_description": "地点",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Locality"
        }, {
            "Id": 540,
            "column_name": "GSResponsibleForManualNumber",
            "column_description": "负责人工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "ResponsibleForManualNumber"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "GoodsShelves",
        "table_name_en": "GoodsShelves",
        "table_name_ch": "货架",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "PurchaseUnitPrice": {
        "Id": 121,
        "Columns": [{
            "Id": 541,
            "column_name": "PUPSupplierNumber",
            "column_description": "供应商编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "SupplierNumber"
        }, {
            "Id": 542,
            "column_name": "PUPCargoNumber",
            "column_description": "货物编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "CargoNumber"
        }, {
            "Id": 543,
            "column_name": "PUPPurchasingStaffNumber",
            "column_description": "采购员工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "PurchasingStaffNumber"
        }, {
            "Id": 544,
            "column_name": "PUPDate",
            "column_description": "日期",
            "dbtype": "DATETIME",
            "max_length": 0,
            "pascal_column_name": "Date"
        }, {
            "Id": 545,
            "column_name": "PUPAmount",
            "column_description": "数量",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Amount"
        }, {
            "Id": 546,
            "column_name": "PUPPrice",
            "column_description": "价格",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Price"
        }, {
            "Id": 547,
            "column_name": "PUPRemarks",
            "column_description": "备注",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Remarks"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "PurchaseUnitPrice",
        "table_name_en": "PurchaseUnitPrice",
        "table_name_ch": "采购单",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "Warehouse": {
        "Id": 122,
        "Columns": [{
            "Id": 548,
            "column_name": "WWarehouseNumber",
            "column_description": "仓库编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "WarehouseNumber"
        }, {
            "Id": 549,
            "column_name": "WCapacity",
            "column_description": "容量",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Capacity"
        }, {
            "Id": 550,
            "column_name": "WLocality",
            "column_description": "地点",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Locality"
        }, {
            "Id": 551,
            "column_name": "WResponsibleForManualNumber",
            "column_description": "负责人工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "ResponsibleForManualNumber"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "Warehouse",
        "table_name_en": "Warehouse",
        "table_name_ch": "仓库",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "Customertype": {
        "Id": 123,
        "Columns": [{
            "Id": 552,
            "column_name": "CCustomerNumber",
            "column_description": "客户编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "CustomerNumber"
        }, {
            "Id": 553,
            "column_name": "CName",
            "column_description": "姓名",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Name"
        }, {
            "Id": 554,
            "column_name": "CCommonModeOfContact",
            "column_description": "联系方式",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "CommonModeOfContact"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "Customertype",
        "table_name_en": "Customertype",
        "table_name_ch": "客户",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "SalesUnitPrice": {
        "Id": 124,
        "Columns": [{
            "Id": 555,
            "column_name": "SUPCargoNumber",
            "column_description": "货物编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "CargoNumber"
        }, {
            "Id": 556,
            "column_name": "SUPCustomerNumber",
            "column_description": "客户编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "CustomerNumber"
        }, {
            "Id": 557,
            "column_name": "SUPSalesStaffNumber",
            "column_description": "销售员工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "SalesStaffNumber"
        }, {
            "Id": 558,
            "column_name": "SUPDate",
            "column_description": "日期",
            "dbtype": "DATETIME",
            "max_length": 0,
            "pascal_column_name": "Date"
        }, {
            "Id": 559,
            "column_name": "SUPAmount",
            "column_description": "数量",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Amount"
        }, {
            "Id": 560,
            "column_name": "SUPPrice",
            "column_description": "价格",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Price"
        }, {
            "Id": 561,
            "column_name": "SUPRemarks",
            "column_description": "备注",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Remarks"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "SalesUnitPrice",
        "table_name_en": "SalesUnitPrice",
        "table_name_ch": "销售单",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "SupplyList": {
        "Id": 125,
        "Columns": [{
            "Id": 562,
            "column_name": "SLWarehouseNumber",
            "column_description": "仓库编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "WarehouseNumber"
        }, {
            "Id": 563,
            "column_name": "SLCargoNumber",
            "column_description": "货物编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "CargoNumber"
        }, {
            "Id": 564,
            "column_name": "SLWarehouseManagementStaffNumber",
            "column_description": "仓库管理员工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "WarehouseManagementStaffNumber"
        }, {
            "Id": 565,
            "column_name": "SLDate",
            "column_description": "日期",
            "dbtype": "DATETIME",
            "max_length": 0,
            "pascal_column_name": "Date"
        }, {
            "Id": 566,
            "column_name": "SLAmount",
            "column_description": "数量",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Amount"
        }, {
            "Id": 567,
            "column_name": "SLRemarks",
            "column_description": "备注",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Remarks"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "SupplyList",
        "table_name_en": "SupplyList",
        "table_name_ch": "供货单",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "ReplenishmentBill": {
        "Id": 126,
        "Columns": [{
            "Id": 568,
            "column_name": "RBShelfNumber",
            "column_description": "货架编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "ShelfNumber"
        }, {
            "Id": 569,
            "column_name": "RBCargoNumber",
            "column_description": "货物编号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "CargoNumber"
        }, {
            "Id": 570,
            "column_name": "RBWarehouseManagementStaffNumber",
            "column_description": "仓库管理员工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "WarehouseManagementStaffNumber"
        }, {
            "Id": 571,
            "column_name": "RBDate",
            "column_description": "日期",
            "dbtype": "DATETIME",
            "max_length": 0,
            "pascal_column_name": "Date"
        }, {
            "Id": 572,
            "column_name": "RBAmount",
            "column_description": "数量",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Amount"
        }, {
            "Id": 573,
            "column_name": "RBRemarks",
            "column_description": "备注",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Remarks"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "ReplenishmentBill",
        "table_name_en": "ReplenishmentBill",
        "table_name_ch": "补货单",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "MenuConfiguration": {
        "Id": 127,
        "Columns": [{
            "Id": 574,
            "column_name": "MCCaption",
            "column_description": "标题",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Caption"
        }, {
            "Id": 575,
            "column_name": "MCParentTitle",
            "column_description": "父级标题",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "ParentTitle"
        }, {
            "Id": 576,
            "column_name": "MCLink",
            "column_description": "链接",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Link"
        }, {
            "Id": 577,
            "column_name": "MCMenuType",
            "column_description": "菜单类型",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "MenuType"
        }, {
            "Id": 578,
            "column_name": "MCSequence",
            "column_description": "顺序",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "Sequence"
        }, {
            "Id": 579,
            "column_name": "MCDisplayName",
            "column_description": "显示名称",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "DisplayName"
        }, {
            "Id": 580,
            "column_name": "MCPicture",
            "column_description": "图片",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Picture"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "MenuConfiguration",
        "table_name_en": "MenuConfiguration",
        "table_name_ch": "菜单配置",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "RoleMenu": {
        "Id": 128,
        "Columns": [{
            "Id": 581,
            "column_name": "RMRoleName",
            "column_description": "角色名称",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "RoleName"
        }, {
            "Id": 582,
            "column_name": "RMMenuTitle",
            "column_description": "菜单标题",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "MenuTitle"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "RoleMenu",
        "table_name_en": "RoleMenu",
        "table_name_ch": "角色菜单",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "UserRole": {
        "Id": 129,
        "Columns": [{
            "Id": 583,
            "column_name": "URRoleName",
            "column_description": "角色名称",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "RoleName"
        }, {
            "Id": 584,
            "column_name": "URLoginName",
            "column_description": "登录名",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "LoginName"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "UserRole",
        "table_name_en": "UserRole",
        "table_name_ch": "用户角色",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "RoleConfiguration": {
        "Id": 130,
        "Columns": [{
            "Id": 585,
            "column_name": "RCRoleName",
            "column_description": "角色名称",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "RoleName"
        }, {
            "Id": 586,
            "column_name": "RCAffiliatedOrganization",
            "column_description": "所属组织",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "AffiliatedOrganization"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "RoleConfiguration",
        "table_name_en": "RoleConfiguration",
        "table_name_ch": "角色配置",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "UserInformation": {
        "Id": 131,
        "Columns": [{
            "Id": 587,
            "column_name": "UIJobNumber",
            "column_description": "工号",
            "dbtype": "INT",
            "max_length": 0,
            "pascal_column_name": "JobNumber"
        }, {
            "Id": 588,
            "column_name": "UILoginName",
            "column_description": "登录名",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "LoginName"
        }, {
            "Id": 589,
            "column_name": "UINickname",
            "column_description": "昵称",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Nickname"
        }, {
            "Id": 590,
            "column_name": "UIRealName",
            "column_description": "真实姓名",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "RealName"
        }, {
            "Id": 591,
            "column_name": "UIHeadPortrait",
            "column_description": "头像",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "HeadPortrait"
        }, {
            "Id": 592,
            "column_name": "UIDepartment",
            "column_description": "部门",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Department"
        }, {
            "Id": 593,
            "column_name": "UIPost",
            "column_description": "职位",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Post"
        }, {
            "Id": 594,
            "column_name": "UIBooth",
            "column_description": "电话",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Booth"
        }, {
            "Id": 595,
            "column_name": "UIPhoto",
            "column_description": "照片",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Photo"
        }, {
            "Id": 596,
            "column_name": "UICustomerType",
            "column_description": "用户类型",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "CustomerType"
        }, {
            "Id": 597,
            "column_name": "UIUserLevel",
            "column_description": "用户级别",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "UserLevel"
        }, {
            "Id": 598,
            "column_name": "UITimeOfEntry",
            "column_description": "入职时间",
            "dbtype": "DATETIME",
            "max_length": 0,
            "pascal_column_name": "TimeOfEntry"
        }, {
            "Id": 599,
            "column_name": "UIDepartureTime",
            "column_description": "离职时间",
            "dbtype": "DATETIME",
            "max_length": 0,
            "pascal_column_name": "DepartureTime"
        }, {
            "Id": 600,
            "column_name": "UICode",
            "column_description": "密码",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Code"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "UserInformation",
        "table_name_en": "UserInformation",
        "table_name_ch": "用户信息",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "LogonRecord": {
        "Id": 132,
        "Columns": [{
            "Id": 601,
            "column_name": "LRLoginName",
            "column_description": "登录名",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "LoginName"
        }, {
            "Id": 602,
            "column_name": "LRLoginTime",
            "column_description": "登录时间",
            "dbtype": "DATETIME",
            "max_length": 0,
            "pascal_column_name": "LoginTime"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "LogonRecord",
        "table_name_en": "LogonRecord",
        "table_name_ch": "登录记录",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "UserMenu": {
        "Id": 133,
        "Columns": [{
            "Id": 603,
            "column_name": "UMLoginName",
            "column_description": "登录名",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "LoginName"
        }, {
            "Id": 604,
            "column_name": "UMCaption",
            "column_description": "标题",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Caption"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "UserMenu",
        "table_name_en": "UserMenu",
        "table_name_ch": "用户菜单",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    },
    "SystemConfiguration": {
        "Id": 134,
        "Columns": [{
            "Id": 605,
            "column_name": "SCKey",
            "column_description": "键",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Key"
        }, {
            "Id": 606,
            "column_name": "SCAccrued",
            "column_description": "值",
            "dbtype": "NVARCHAR(50)",
            "max_length": 0,
            "pascal_column_name": "Accrued"
        }],
        "Children": null,
        "Parent": null,
        "r": null,
        "table_name": "SystemConfiguration",
        "table_name_en": "SystemConfiguration",
        "table_name_ch": "系统配置",
        "column_name": null,
        "column_description": null,
        "dbtype": null,
        "max_length": 0
    }
}