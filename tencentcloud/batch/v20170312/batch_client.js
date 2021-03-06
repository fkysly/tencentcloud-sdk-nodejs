const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const AnonymousComputeEnv = models.AnonymousComputeEnv;
const DeleteComputeEnvResponse = models.DeleteComputeEnvResponse;
const SubmitJobRequest = models.SubmitJobRequest;
const Authentication = models.Authentication;
const TerminateComputeNodeRequest = models.TerminateComputeNodeRequest;
const AgentRunningMode = models.AgentRunningMode;
const EnvData = models.EnvData;
const DescribeTaskTemplatesRequest = models.DescribeTaskTemplatesRequest;
const Notification = models.Notification;
const SystemDisk = models.SystemDisk;
const Task = models.Task;
const InstanceTypeConfig = models.InstanceTypeConfig;
const DescribeComputeEnvActivitiesResponse = models.DescribeComputeEnvActivitiesResponse;
const TaskInstanceMetrics = models.TaskInstanceMetrics;
const MountDataDisk = models.MountDataDisk;
const TaskView = models.TaskView;
const DescribeComputeEnvResponse = models.DescribeComputeEnvResponse;
const TerminateJobRequest = models.TerminateJobRequest;
const Application = models.Application;
const OutputMappingConfig = models.OutputMappingConfig;
const TaskInstanceView = models.TaskInstanceView;
const TaskMetrics = models.TaskMetrics;
const TerminateComputeNodesRequest = models.TerminateComputeNodesRequest;
const EventVar = models.EventVar;
const DescribeComputeEnvActivitiesRequest = models.DescribeComputeEnvActivitiesRequest;
const CreateTaskTemplateRequest = models.CreateTaskTemplateRequest;
const Job = models.Job;
const CreateComputeEnvRequest = models.CreateComputeEnvRequest;
const DescribeComputeEnvCreateInfoResponse = models.DescribeComputeEnvCreateInfoResponse;
const ComputeEnvCreateInfo = models.ComputeEnvCreateInfo;
const DescribeComputeEnvCreateInfosRequest = models.DescribeComputeEnvCreateInfosRequest;
const DescribeComputeEnvRequest = models.DescribeComputeEnvRequest;
const DescribeTaskTemplatesResponse = models.DescribeTaskTemplatesResponse;
const ComputeNodeMetrics = models.ComputeNodeMetrics;
const DeleteJobRequest = models.DeleteJobRequest;
const DeleteTaskTemplatesRequest = models.DeleteTaskTemplatesRequest;
const DescribeJobResponse = models.DescribeJobResponse;
const DescribeComputeEnvCreateInfoRequest = models.DescribeComputeEnvCreateInfoRequest;
const ModifyTaskTemplateRequest = models.ModifyTaskTemplateRequest;
const DataDisk = models.DataDisk;
const NamedComputeEnv = models.NamedComputeEnv;
const DeleteJobResponse = models.DeleteJobResponse;
const EventConfig = models.EventConfig;
const LoginSettings = models.LoginSettings;
const OutputMapping = models.OutputMapping;
const EnhancedService = models.EnhancedService;
const DescribeJobSubmitInfoResponse = models.DescribeJobSubmitInfoResponse;
const DescribeComputeEnvCreateInfosResponse = models.DescribeComputeEnvCreateInfosResponse;
const RunSecurityServiceEnabled = models.RunSecurityServiceEnabled;
const DescribeJobRequest = models.DescribeJobRequest;
const RedirectInfo = models.RedirectInfo;
const ModifyTaskTemplateResponse = models.ModifyTaskTemplateResponse;
const SubmitJobResponse = models.SubmitJobResponse;
const InputMapping = models.InputMapping;
const RedirectLocalInfo = models.RedirectLocalInfo;
const DescribeJobSubmitInfoRequest = models.DescribeJobSubmitInfoRequest;
const Dependence = models.Dependence;
const Filter = models.Filter;
const CreateComputeEnvResponse = models.CreateComputeEnvResponse;
const Docker = models.Docker;
const ModifyComputeEnvResponse = models.ModifyComputeEnvResponse;
const Placement = models.Placement;
const ComputeNode = models.ComputeNode;
const DeleteComputeEnvRequest = models.DeleteComputeEnvRequest;
const CreateTaskTemplateResponse = models.CreateTaskTemplateResponse;
const TerminateJobResponse = models.TerminateJobResponse;
const DescribeJobsRequest = models.DescribeJobsRequest;
const TaskTemplateView = models.TaskTemplateView;
const DeleteTaskTemplatesResponse = models.DeleteTaskTemplatesResponse;
const TerminateTaskInstanceRequest = models.TerminateTaskInstanceRequest;
const TerminateTaskInstanceResponse = models.TerminateTaskInstanceResponse;
const TerminateComputeNodesResponse = models.TerminateComputeNodesResponse;
const DescribeAvailableCvmInstanceTypesResponse = models.DescribeAvailableCvmInstanceTypesResponse;
const DescribeTaskResponse = models.DescribeTaskResponse;
const ComputeEnvView = models.ComputeEnvView;
const DescribeComputeEnvsResponse = models.DescribeComputeEnvsResponse;
const DescribeTaskRequest = models.DescribeTaskRequest;
const DescribeComputeEnvsRequest = models.DescribeComputeEnvsRequest;
const DescribeJobsResponse = models.DescribeJobsResponse;
const Activity = models.Activity;
const RunMonitorServiceEnabled = models.RunMonitorServiceEnabled;
const TerminateComputeNodeResponse = models.TerminateComputeNodeResponse;
const VirtualPrivateCloud = models.VirtualPrivateCloud;
const DescribeAvailableCvmInstanceTypesRequest = models.DescribeAvailableCvmInstanceTypesRequest;
const ModifyComputeEnvRequest = models.ModifyComputeEnvRequest;
const InternetAccessible = models.InternetAccessible;
const JobView = models.JobView;
const EnvVar = models.EnvVar;


/**
 * batch client
 * @class
 */
class BatchClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("batch.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 用于查询计算环境的详细信息
     * @param {DescribeComputeEnvRequest} req
     * @param {function(string, DescribeComputeEnvResponse):void} cb
     * @public
     */
    DescribeComputeEnv(req, cb) {
        let resp = new DescribeComputeEnvResponse();
        this.request("DescribeComputeEnv", req, resp, cb);
    }

    /**
     * 用于创建任务模板
     * @param {CreateTaskTemplateRequest} req
     * @param {function(string, CreateTaskTemplateResponse):void} cb
     * @public
     */
    CreateTaskTemplate(req, cb) {
        let resp = new CreateTaskTemplateResponse();
        this.request("CreateTaskTemplate", req, resp, cb);
    }

    /**
     * 用于销毁计算节点。
对于状态为CREATED、CREATION_FAILED、RUNNING和ABNORMAL的节点，允许销毁处理。
     * @param {TerminateComputeNodeRequest} req
     * @param {function(string, TerminateComputeNodeResponse):void} cb
     * @public
     */
    TerminateComputeNode(req, cb) {
        let resp = new TerminateComputeNodeResponse();
        this.request("TerminateComputeNode", req, resp, cb);
    }

    /**
     * 用于查询若干个作业的概览信息
     * @param {DescribeJobsRequest} req
     * @param {function(string, DescribeJobsResponse):void} cb
     * @public
     */
    DescribeJobs(req, cb) {
        let resp = new DescribeJobsResponse();
        this.request("DescribeJobs", req, resp, cb);
    }

    /**
     * 查看可用的CVM机型配置信息
     * @param {DescribeAvailableCvmInstanceTypesRequest} req
     * @param {function(string, DescribeAvailableCvmInstanceTypesResponse):void} cb
     * @public
     */
    DescribeAvailableCvmInstanceTypes(req, cb) {
        let resp = new DescribeAvailableCvmInstanceTypesResponse();
        this.request("DescribeAvailableCvmInstanceTypes", req, resp, cb);
    }

    /**
     * 用于创建计算环境
     * @param {CreateComputeEnvRequest} req
     * @param {function(string, CreateComputeEnvResponse):void} cb
     * @public
     */
    CreateComputeEnv(req, cb) {
        let resp = new CreateComputeEnvResponse();
        this.request("CreateComputeEnv", req, resp, cb);
    }

    /**
     * 用于删除计算环境
     * @param {DeleteComputeEnvRequest} req
     * @param {function(string, DeleteComputeEnvResponse):void} cb
     * @public
     */
    DeleteComputeEnv(req, cb) {
        let resp = new DeleteComputeEnvResponse();
        this.request("DeleteComputeEnv", req, resp, cb);
    }

    /**
     * 用于终止作业。
终止作业的效果相当于所含的所有任务实例进行TerminateTaskInstance操作。具体效果和用法可参考TerminateTaskInstance。
     * @param {TerminateJobRequest} req
     * @param {function(string, TerminateJobResponse):void} cb
     * @public
     */
    TerminateJob(req, cb) {
        let resp = new TerminateJobResponse();
        this.request("TerminateJob", req, resp, cb);
    }

    /**
     * 用于查询指定任务的详细信息，包括任务内部的任务实例信息。
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }

    /**
     * 用于查看一个作业的详细信息，包括内部任务（Task）和依赖（Dependence）信息。
     * @param {DescribeJobRequest} req
     * @param {function(string, DescribeJobResponse):void} cb
     * @public
     */
    DescribeJob(req, cb) {
        let resp = new DescribeJobResponse();
        this.request("DescribeJob", req, resp, cb);
    }

    /**
     * 用于提交一个作业
     * @param {SubmitJobRequest} req
     * @param {function(string, SubmitJobResponse):void} cb
     * @public
     */
    SubmitJob(req, cb) {
        let resp = new SubmitJobResponse();
        this.request("SubmitJob", req, resp, cb);
    }

    /**
     * 用于批量销毁计算节点，不允许重复销毁同一个节点。
     * @param {TerminateComputeNodesRequest} req
     * @param {function(string, TerminateComputeNodesResponse):void} cb
     * @public
     */
    TerminateComputeNodes(req, cb) {
        let resp = new TerminateComputeNodesResponse();
        this.request("TerminateComputeNodes", req, resp, cb);
    }

    /**
     * 用于查询任务模板信息
     * @param {DescribeTaskTemplatesRequest} req
     * @param {function(string, DescribeTaskTemplatesResponse):void} cb
     * @public
     */
    DescribeTaskTemplates(req, cb) {
        let resp = new DescribeTaskTemplatesResponse();
        this.request("DescribeTaskTemplates", req, resp, cb);
    }

    /**
     * 用于删除任务模板信息
     * @param {DeleteTaskTemplatesRequest} req
     * @param {function(string, DeleteTaskTemplatesResponse):void} cb
     * @public
     */
    DeleteTaskTemplates(req, cb) {
        let resp = new DeleteTaskTemplatesResponse();
        this.request("DeleteTaskTemplates", req, resp, cb);
    }

    /**
     * 用于终止任务实例
对于状态已经为SUCCEED、FAILED的TaskInstance，batch不做处理。
对于状态为SUBMITTED、PENDING、RUNNABLE的TaskInstance，batch会将其置为FAILED状态。
对于状态为STARTING、RUNNING、FAILED_INTERRUPTED的TaskInstance，batch会先终止CVM，然后将状态置为FAILED，因此具有一定耗时。特别是如果CVM正在创建中，此时无法立即销毁CVM，Batch会在旁路注册一个定时销毁操作，在CVM创建好之后异步销毁。
对于状态为FAILED_INTERRUPTED的TaskInstance，TerminateTaskInstance操作实际成功之后，相关资源和配额才会释放。
本接口只支持提交到匿名计算环境的作业（SubmitJob指定ComputeEnv，不指定EnvId）。对于提交到具名计算环境的作业（SubmitJob指定EnvId，不指定ComputeEnv），不支持TerminateTaskInstance和TerminateJob操作。
     * @param {TerminateTaskInstanceRequest} req
     * @param {function(string, TerminateTaskInstanceResponse):void} cb
     * @public
     */
    TerminateTaskInstance(req, cb) {
        let resp = new TerminateTaskInstanceResponse();
        this.request("TerminateTaskInstance", req, resp, cb);
    }

    /**
     * 用于修改计算环境的期望节点数量
     * @param {ModifyComputeEnvRequest} req
     * @param {function(string, ModifyComputeEnvResponse):void} cb
     * @public
     */
    ModifyComputeEnv(req, cb) {
        let resp = new ModifyComputeEnvResponse();
        this.request("ModifyComputeEnv", req, resp, cb);
    }

    /**
     * 用于查询指定作业的提交信息，其返回内容包括 JobId 和 SubmitJob 接口中作为输入参数的作业提交信息
     * @param {DescribeJobSubmitInfoRequest} req
     * @param {function(string, DescribeJobSubmitInfoResponse):void} cb
     * @public
     */
    DescribeJobSubmitInfo(req, cb) {
        let resp = new DescribeJobSubmitInfoResponse();
        this.request("DescribeJobSubmitInfo", req, resp, cb);
    }

    /**
     * 查看计算环境的创建信息。
     * @param {DescribeComputeEnvCreateInfoRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfoResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfo(req, cb) {
        let resp = new DescribeComputeEnvCreateInfoResponse();
        this.request("DescribeComputeEnvCreateInfo", req, resp, cb);
    }

    /**
     * 用于查询计算环境的活动信息
     * @param {DescribeComputeEnvActivitiesRequest} req
     * @param {function(string, DescribeComputeEnvActivitiesResponse):void} cb
     * @public
     */
    DescribeComputeEnvActivities(req, cb) {
        let resp = new DescribeComputeEnvActivitiesResponse();
        this.request("DescribeComputeEnvActivities", req, resp, cb);
    }

    /**
     * 用于查看计算环境创建信息列表，包括名称、描述、类型、环境参数、通知及期望节点数等。
     * @param {DescribeComputeEnvCreateInfosRequest} req
     * @param {function(string, DescribeComputeEnvCreateInfosResponse):void} cb
     * @public
     */
    DescribeComputeEnvCreateInfos(req, cb) {
        let resp = new DescribeComputeEnvCreateInfosResponse();
        this.request("DescribeComputeEnvCreateInfos", req, resp, cb);
    }

    /**
     * 用于删除作业记录。
删除作业的效果相当于删除作业相关的所有信息。删除成功后，作业相关的所有信息都无法查询。
待删除的作业必须处于完结状态，且其内部包含的所有任务实例也必须处于完结状态，否则会禁止操作。完结状态，是指处于 SUCCEED 或 FAILED 状态。
     * @param {DeleteJobRequest} req
     * @param {function(string, DeleteJobResponse):void} cb
     * @public
     */
    DeleteJob(req, cb) {
        let resp = new DeleteJobResponse();
        this.request("DeleteJob", req, resp, cb);
    }

    /**
     * 用于查看计算环境列表
     * @param {DescribeComputeEnvsRequest} req
     * @param {function(string, DescribeComputeEnvsResponse):void} cb
     * @public
     */
    DescribeComputeEnvs(req, cb) {
        let resp = new DescribeComputeEnvsResponse();
        this.request("DescribeComputeEnvs", req, resp, cb);
    }

    /**
     * 用于修改任务模板
     * @param {ModifyTaskTemplateRequest} req
     * @param {function(string, ModifyTaskTemplateResponse):void} cb
     * @public
     */
    ModifyTaskTemplate(req, cb) {
        let resp = new ModifyTaskTemplateResponse();
        this.request("ModifyTaskTemplate", req, resp, cb);
    }


}
module.exports = BatchClient;
