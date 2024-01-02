import { Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from '../@core/service/alert.service';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import { LandingPageModel, RoleModel, UserRoleDto } from '../@core/datamodel/rbacDataModel';
import { DataStoreService } from '../@core/service/data-store.service';
import { MicrostrategyService } from '../@core/service/microstrategy.service';
import { RbacService } from '../@core/service/rbac.service';
import { TreeNode } from 'primeng/api/treenode';
import { MenuItem } from 'primeng/api/menuitem';
import * as i0 from "@angular/core";
export declare class RolesComponent implements OnInit {
    private formBuilder;
    private alertService;
    private mstrService;
    private rolesService;
    private _storeservice;
    roleId: number;
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
    landingPage: LandingPageModel[];
    policyGroupList: any;
    permissionAllow: boolean;
    orgId: any;
    reportDashboardList: any;
    environment: any;
    RBACORG: RBACINFO;
    orgSubs: Subscription;
    items: MenuItem[];
    activeItem: MenuItem;
    firstTab: boolean;
    mainMenuList: any;
    reArrangedList: any;
    menuList: any;
    subMenuList: any;
    parent: any;
    childMenuList: any;
    showChildren: boolean;
    parentMenulist: TreeNode[];
    selectedFile: TreeNode;
    buildTree: (parentId: any) => (item: any) => any;
    nestedData(): void;
    constructor(injector: Injector, formBuilder: FormBuilder, alertService: AlertService, mstrService: MicrostrategyService, rolesService: RbacService, _storeservice: DataStoreService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initializeform(): void;
    get formValidate(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    getLandingPage(): void;
    getRoleList(_key?: string): void;
    getPolicyGroupList(_managementGroupId?: number): void;
    searchRole(event: Event): void;
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
    addRole(): void;
    mapPolicyGroupToRole(id: number, data: [], action?: string): void;
    getReturnValue(array?: Array<any>, type?: string): any[];
    getChecked(item: Array<any>): boolean;
    getCheckedWrite(item: Array<any>): boolean;
    cancel(): void;
    delete(event: Event, id: any): void;
    deleteRole(): void;
    getReportDashboard(): Promise<void>;
    roleValidation(): any;
    onModelRole(value: string): void;
    activateMenu(event: any): void;
    getPageInformation(): void;
    updateMenuOrder(): void;
    nodeDrop(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RolesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RolesComponent, "roles", never, {}, {}, never, never>;
}
