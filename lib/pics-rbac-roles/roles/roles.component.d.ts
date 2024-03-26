import { Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api/menuitem';
import { TreeNode } from 'primeng/api/treenode';
import { Subscription } from 'rxjs';
import { LandingPageModel, RoleModel, UserRoleDto } from '../@core/datamodel/rbacDataModel';
import { AlertService } from '../@core/service/alert.service';
import { DataStoreService } from '../@core/service/data-store.service';
import { MicrostrategyService } from '../@core/service/microstrategy.service';
import { RbacService } from '../@core/service/rbac.service';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class RolesComponent implements OnInit {
    private formBuilder;
    private alertService;
    private mstrService;
    private rolesService;
    private _storeservice;
    private permissionService;
    roleId: number;
    deleteactive_user: boolean;
    deleteactive_buttonok: boolean;
    roleList: RoleModel[];
    filteredRoleList: RoleModel[];
    isDisabled: boolean;
    selectedPermissionsGroup: {
        id: number;
        allow: boolean;
        write: boolean;
    }[];
    userroles: UserRoleDto[];
    isDisabledOther: boolean;
    deletedId: string;
    modelRoleName: string;
    roleForm: FormGroup;
    formSubmit: boolean;
    permissions: Array<any>;
    filterPermissions: any[];
    landingPage: LandingPageModel[];
    policyGroupList: any;
    permissionAllow: boolean;
    orgId: any;
    reportDashboardList: any;
    duplicatereportDashboardList: any;
    environment: any;
    RBACORG: RBACINFO;
    orgSubs: Subscription;
    modalContent: string;
    items: MenuItem[];
    activeItem: MenuItem;
    firstTab: boolean;
    mainMenuList: any;
    reArrangedList: any;
    dublicateLandingPage: any[];
    menuList: any;
    subMenuList: any;
    parent: any;
    childMenuList: any;
    showChildren: boolean;
    parentMenulist: TreeNode[];
    selectedFile: TreeNode;
    httpService: any;
    validationErrors: {
        [key: string]: string;
    };
    inputValidationMethod: any;
    buildTree: (parentId: any) => (item: any) => any;
    originalPermissions: Array<any>;
    nestedData(): void;
    constructor(injector: Injector, formBuilder: FormBuilder, alertService: AlertService, mstrService: MicrostrategyService, rolesService: RbacService, _storeservice: DataStoreService, permissionService: RbacService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initializeform(): void;
    get formValidate(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    onInput(event: Event, fieldtype: any, label: any, required: boolean): void;
    getLandingPage(): void;
    getRoleList(_key?: string): void;
    getPolicyGroupList(_managementGroupId?: number): void;
    clearSearch(event: Event): void;
    onClickAddRole(): void;
    searchRole(event: Event): void;
    clearPermission(event?: Event): void;
    searchRolePermission(event: Event): void;
    getTabs(): void;
    getRoleInfo(roleid: any): void;
    roleInformation(res: any): void;
    get hasAccess(): UserRoleDto;
    isPrivilage(permission: any): boolean;
    selectAllPage(index: number, event: any): void;
    getSelectedPermisions(item: any): void;
    selectAllPrivilage(pageIndex: number, permissionIndex: number, event: any): void;
    selectPage(pageIndex: number, permissionIndex: number, event: any): void;
    selectPrivilege(pageIndex: number, permissionIndex: number, privilegeIndex: number, event: any): void;
    getPageChecked(pageIndex: number): void;
    getPrivilageChecked(pageIndex: number, permissionIndex: number): void;
    selectAllAccess(value: boolean): void;
    addNewRole(id: string): void;
    setSelectedPermisions(_selected: boolean, id: number, allow: boolean, write: boolean): void;
    resetReportDashboardList(): void;
    addRole(): void;
    mapPolicyGroupToRole(id: number, data: [], action?: string): void;
    getReturnValue(array?: Array<any>, type?: string): any[];
    getChecked(item: Array<any>): boolean;
    getCheckedWrite(item: Array<any>): boolean;
    cancel(): void;
    delete(event: Event, id: any, item: any): void;
    deleteRole(): void;
    getReportDashboard(): Promise<void>;
    onModelRole(value: string): void;
    searchLandingPageList(event: Event): void;
    resetLandingPageList(): void;
    activateMenu(event: any): void;
    getPageInformation(): void;
    updateMenuOrder(): void;
    nodeDrop(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RolesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RolesComponent, "roles", never, {}, {}, never, never>;
}
