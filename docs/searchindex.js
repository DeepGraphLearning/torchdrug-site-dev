Search.setIndex({docnames:["api/core","api/data","api/datasets","api/index","api/layers","api/metrics","api/models","api/tasks","api/utils","benchmark/generation","benchmark/index","benchmark/pretrain","benchmark/property_prediction","benchmark/reasoning","benchmark/retrosynthesis","bibliography","index","installation","notes/graph","notes/index","notes/layer","notes/model","notes/variadic","paper","quick_start","tutorials/generation","tutorials/index","tutorials/pretrain","tutorials/property_prediction","tutorials/reasoning","tutorials/retrosynthesis"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/core.rst","api/data.rst","api/datasets.rst","api/index.rst","api/layers.rst","api/metrics.rst","api/models.rst","api/tasks.rst","api/utils.rst","benchmark/generation.rst","benchmark/index.rst","benchmark/pretrain.rst","benchmark/property_prediction.rst","benchmark/reasoning.rst","benchmark/retrosynthesis.rst","bibliography.rst","index.rst","installation.rst","notes/graph.rst","notes/index.rst","notes/layer.rst","notes/model.rst","notes/variadic.rst","paper.rst","quick_start.rst","tutorials/generation.rst","tutorials/index.rst","tutorials/pretrain.rst","tutorials/property_prediction.rst","tutorials/reasoning.rst","tutorials/retrosynthesis.rst"],objects:{"torchdrug.core":{Configurable:[0,0,1,""],Engine:[0,0,1,""],Meter:[0,0,1,""],Registry:[0,0,1,""],_MetaContainer:[0,0,1,""]},"torchdrug.data":{DataLoader:[1,0,1,""],Graph:[1,0,1,""],KnowledgeGraphDataset:[1,0,1,""],Molecule:[1,0,1,""],MoleculeDataset:[1,0,1,""],NodeClassificationDataset:[1,0,1,""],PackedGraph:[1,0,1,""],PackedMolecule:[1,0,1,""],ReactionDataset:[1,0,1,""],graph_collate:[1,1,1,""],ordered_scaffold_split:[1,1,1,""],scaffold_split:[1,1,1,""],semisupervised:[1,1,1,""]},"torchdrug.datasets":{BACE:[2,0,1,""],BBBP:[2,0,1,""],CEP:[2,0,1,""],ChEMBLFiltered:[2,0,1,""],CiteSeer:[2,0,1,""],ClinTox:[2,0,1,""],Cora:[2,0,1,""],Delaney:[2,0,1,""],FB15k237:[2,0,1,""],FB15k:[2,0,1,""],FreeSolv:[2,0,1,""],HIV:[2,0,1,""],Lipophilicity:[2,0,1,""],MUV:[2,0,1,""],Malaria:[2,0,1,""],OPV:[2,0,1,""],QM8:[2,0,1,""],QM9:[2,0,1,""],SIDER:[2,0,1,""],Tox21:[2,0,1,""],ToxCast:[2,0,1,""],USPTO50k:[2,0,1,""],WN18:[2,0,1,""],WN18RR:[2,0,1,""],ZINC250k:[2,0,1,""],ZINC2m:[2,0,1,""]},"torchdrug.layers":{ChebyshevConv:[4,0,1,""],ContinuousFilterConv:[4,0,1,""],DiffPool:[4,0,1,""],GaussianSmearing:[4,0,1,""],GraphAttentionConv:[4,0,1,""],GraphConv:[4,0,1,""],GraphIsomorphismConv:[4,0,1,""],MaxReadout:[4,0,1,""],MeanReadout:[4,0,1,""],MessagePassing:[4,0,1,""],MessagePassingBase:[4,0,1,""],MinCutPool:[4,0,1,""],MultiLayerPerceptron:[4,0,1,""],MutualInformation:[4,0,1,""],NeuralFingerprintConv:[4,0,1,""],PairNorm:[4,0,1,""],RelationalGraphConv:[4,0,1,""],Sequential:[4,0,1,""],Set2Set:[4,0,1,""],Softmax:[4,0,1,""],SumReadout:[4,0,1,""],distribution:[4,2,0,"-"],functional:[4,2,0,"-"]},"torchdrug.layers.distribution":{IndependentGaussian:[4,0,1,""]},"torchdrug.layers.distribution.IndependentGaussian":{forward:[4,3,1,""],sample:[4,3,1,""]},"torchdrug.layers.functional":{as_mask:[4,1,1,""],complex_score:[4,1,1,""],distmult_score:[4,1,1,""],masked_mean:[4,1,1,""],mean_with_nan:[4,1,1,""],multi_slice_mask:[4,1,1,""],multinomial:[4,1,1,""],one_hot:[4,1,1,""],rotate_score:[4,1,1,""],shifted_softplus:[4,1,1,""],simple_score:[4,1,1,""],transe_score:[4,1,1,""],variadic_cross_entropy:[4,1,1,""],variadic_log_softmax:[4,1,1,""],variadic_max:[4,1,1,""],variadic_mean:[4,1,1,""],variadic_sum:[4,1,1,""],variadic_topk:[4,1,1,""]},"torchdrug.metrics":{AUPRC:[5,1,1,""],AUROC:[5,1,1,""],QED:[5,1,1,""],SA:[5,1,1,""],area_under_prc:[5,1,1,""],area_under_roc:[5,1,1,""],chemical_validity:[5,1,1,""],logP:[5,1,1,""],penalized_logP:[5,1,1,""],r2:[5,1,1,""],variadic_accuracy:[5,1,1,""]},"torchdrug.models":{ChebNet:[6,4,1,""],ChebyshevConvolutionalNetwork:[6,0,1,""],ComplEx:[6,0,1,""],DistMult:[6,0,1,""],GAT:[6,4,1,""],GCN:[6,4,1,""],GIN:[6,4,1,""],GraphAF:[6,4,1,""],GraphAttentionNetwork:[6,0,1,""],GraphAutoregressiveFlow:[6,0,1,""],GraphConvolutionalNetwork:[6,0,1,""],GraphIsomorphismNetwork:[6,0,1,""],InfoGraph:[6,0,1,""],MPNN:[6,4,1,""],MessagePassingNeuralNetwork:[6,0,1,""],NFP:[6,4,1,""],NeuralFingerprint:[6,0,1,""],NeuralLP:[6,4,1,""],NeuralLogicProgramming:[6,0,1,""],RGCN:[6,4,1,""],RelationalGraphConvolutionalNetwork:[6,0,1,""],RotatE:[6,0,1,""],SchNet:[6,0,1,""],SimplE:[6,0,1,""],TransE:[6,0,1,""]},"torchdrug.tasks":{AttributeMasking:[7,0,1,""],AutoregressiveGeneration:[7,0,1,""],CenterIdentification:[7,0,1,""],ContextPrediction:[7,0,1,""],EdgePrediction:[7,0,1,""],GCPNGeneration:[7,0,1,""],PropertyPrediction:[7,0,1,""],Retrosynthesis:[7,0,1,""],SynthonCompletion:[7,0,1,""],Unsupervised:[7,0,1,""]},"torchdrug.utils":{cached_property:[8,1,1,""],capture_rdkit_log:[8,1,1,""],cat:[8,1,1,""],clone:[8,1,1,""],compute_md5:[8,1,1,""],cpu:[8,1,1,""],cuda:[8,1,1,""],detach:[8,1,1,""],download:[8,1,1,""],extract:[8,1,1,""],get_line_count:[8,1,1,""],input_choice:[8,1,1,""],literal_eval:[8,1,1,""],load_extension:[8,1,1,""],no_rdkit_log:[8,1,1,""],pretty:[8,2,0,"-"],sparse_coo_tensor:[8,1,1,""]},"torchdrug.utils.comm":{cat:[8,1,1,""],get_cpu_count:[8,1,1,""],get_group:[8,1,1,""],get_rank:[8,1,1,""],get_world_size:[8,1,1,""],init_process_group:[8,1,1,""],reduce:[8,1,1,""],stack:[8,1,1,""]},"torchdrug.utils.pretty":{long_array:[8,1,1,""],time:[8,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","module","Python module"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:function","2":"py:module","3":"py:method","4":"py:attribute"},terms:{"120mb":18,"456k":11,"4tb":18,"50k":30,"\u00e9ric":23,"abstract":20,"al\u00e1n":23,"break":30,"case":[2,8,18,20,21,22,24],"class":[0,1,2,4,6,7,10,20,21,25],"default":[0,1,2,4,18],"dur\u00e1n":23,"final":20,"float":[4,6,7,8,21,22],"function":[0,2,3,6,7,18,20,21,22],"g\u00f3mez":23,"garc\u00eda":23,"import":[0,18,20,21,22,24,25,27,28,29,30],"int":[0,1,2,4,6,7,8,21,24,28],"li\u00f2":23,"long":9,"m\u00fcller":23,"micha\u00ebl":23,"new":[1,8,20],"public":2,"return":[0,1,4,8,18,20,21,22,30],"sch\u00fctt":23,"short":6,"super":21,"switch":21,"th\u00e9o":23,"true":[0,1,4,6,21,24,25,27,28,30],"var":20,"veli\u010dkovi\u0107":23,"while":[7,18,21,22,24,27,30],And:27,Are:23,For:[0,1,2,7,11,12,18,20,22,24,25,27,29,30],IDs:20,N1S:25,One:[18,29],Such:21,The:[0,1,7,8,9,11,12,18,20,21,22,24,25,27,28,29,30],Then:[21,29,30],There:[4,18,29,30],These:24,Use:[0,8,22,24],With:29,__getitem__:21,__init__:[0,21],__len__:21,_in_j:20,_lrschedul:0,_meta_typ:0,_metacontain:0,a_1:[1,18],a_i:[1,18],a_n:[1,18],abil:2,about:[0,18,25],abov:[18,20,21,27,29],absolut:1,acc:25,acceler:[18,24],accept:[18,22],acces:5,access:[0,5,9],accord:0,accuraci:[3,22,25,27,30],achiev:24,action:25,activ:[4,6,21],actual:27,adam:[21,23,24,25,27,28,29,30],adapt:24,add:[2,18,21,25,28,30],added:8,addit:[7,24],addition:4,adjac:[1,18],adr:2,adriana:23,advanatag:21,advantag:18,advers:2,adversarial_temperatur:29,affect:2,after:[4,25,29],afterward:29,again:24,against:2,agent:7,agent_update_interv:[7,25],aggreg:[7,20],aguilera:23,aim:[9,28,29],akoglu:23,alberto:23,alexandr:23,algorithm:[9,20,25],alia:6,alippi:23,all:[0,4,5,6,7,8,18,20,21,22,24,25,27,29,30],all_loss:21,all_prefix_slic:22,allclos:8,allow_unus:4,along:[8,22],alreadi:0,also:[0,4,7,9,18,20,21,22,24,25,27,29,30],altern:[18,24],alwai:[2,18],among:[18,21],analysi:2,ani:[0,1,2,4,7,8,18,20,24,30],antoin:23,append:[21,22,28,30],appli:[0,2,4,6,9,18,21,22,24],approach:[16,29],approv:[2,24,28],arang:[8,21,22],arantxa:23,arbitari:18,arbitrari:[21,24],architectur:21,area:[5,21],area_under_prc:5,area_under_roc:[5,21],arg:[4,8],argument:[0,1,4,21],aromat:2,arrai:8,array_lik:[1,8],array_likeb:1,as_mask:4,as_synthon:[2,30],aspect:27,aspuru:23,assert:[0,4,8],assign:[0,4,18,29],assum:8,atom:[0,1,7,22,25,27,30],atom_attribute_model:7,atom_color:30,atom_map:[1,30],atom_typ:[1,7,22,24,25],atoms_and_bond:30,attent:[4,6,23,25,29],attract:25,attribut:[1,2,7,11,19,22,26,30],attributemask:[3,23,27],audio:22,auprc:[3,7,24,28],auroc:[3,7,21,24,28],auto:[0,21,24],automat:[0,1,18,24],autoregress:[6,7,22,23],autoregressivegener:[3,23,25],auxiliari:[3,22],avail:[0,4,6,7,8,17],averag:27,avg:11,avoid:[24,30],axi:[8,22],bace:[3,11],backend:8,background:29,barrier:2,base:[1,2,4,6,7,12,16,18,21,22,23,28,29,30],baselin:[7,11],baseline_momentum:[7,25],basic:[1,3,29],batch:[0,1,4,6,7,16,19,20,21,24,30],batch_norm:[4,6,21,24,25,27,28],batch_sampl:1,batch_siz:[0,1,20,21,24,25,27,28,29,30],bbbp:[3,11],bce:[7,21,24,25,28],beam:30,becaus:27,been:25,befor:30,begin:[1,8,18],behind:18,belong:27,below:27,benchmark:[9,11,12,13,14,16],bengio:23,benzen:18,berg:23,beta:[2,21],better:[21,29,30],between:[5,6,7,18,21,24,25,30],bia:29,bianchi:23,big:22,binari:[2,4,5,18,24],binary_cross_entropy_with_logit:21,bind:2,bioassai:2,biolog:2,bipartit:20,bishan:23,block:[1,16],bloem:23,blood:2,blue:30,bmatrix:[1,18],bodi:29,boilerpl:24,bombarelli:23,bond:[1,2,7,18,30],bond_color:30,bond_stereo:1,bond_typ:[1,2,24],bool:[1,2,4,6],booltensor:4,bord:23,born_in:29,both:[6,12,20,21,25,30],bother:24,bouchard:23,bound:18,bowen:23,brain:2,brc1:22,bresson:23,broadcast:[8,19],broken:30,budget:30,build:[0,16,29],built:16,bunch:[0,18],c12:25,c12cc:25,c1br:25,c1c:25,c1cccnc1:24,c1ccnc:25,c1f:25,c1n:25,c1nc2:25,c1nc:25,c2c:25,c2ccccc2:24,c2nc2:25,cach:8,cached_properti:8,calcul:2,call:[0,4,27,30],callabl:[1,2],can:[0,4,7,8,17,18,20,21,22,24,25,27,28,29,30],candid:[2,8,30],cannot:20,captur:8,capture_rdkit_log:8,carbon:24,casanova:23,cat:[8,21,22],categori:[4,5,28],caus:2,caution:0,cc1:25,cc1ccnc:25,cc2:25,ccc1:25,ccc:25,cccc1c:25,cccc:25,ccccc:25,ccn:25,ccnc1ccc2:25,ccnc:[22,25],cco:25,ccoc:[24,25],ccsccsp:24,cdot:[1,18],center:[4,7,26],center_identif:7,center_topk:[7,30],centeridentif:[3,23,30],centric:21,cep:3,cesar:23,chain:29,challeng:25,characterist:5,charg:1,chebnet:3,chebyshev:[4,6],chebyshevconv:[3,23],chebyshevconvolutionalnetwork:[6,23],check:8,checkpoint:[25,30],chembl:11,chemblfilt:3,chemic:[1,2,3,9,24,25,28],chemical_valid:5,chemistri:[4,6,23],chenc:23,chiral:1,chiral_tag:1,chmiela:23,choic:8,choos:9,christoph:23,chunk:[8,21],chunk_siz:8,citat:2,cites:3,city_of:29,clamp:22,classif:[2,4,5,6,16,21,22,23],classifi:16,clean:2,clinic:[2,24,28],clintox:[3,11,24,27,28],clintox_gin:24,clone:[8,17],close:30,cluster:[4,23],cn1cc1:25,cn2c:25,cnc2:25,cnc:25,co1:25,coc1:25,cocc2:25,code:[0,18,24,25,28,29,30],coeffici:[2,5,9],cohen:23,collat:1,collate_fn:1,collect:[20,24,25,30],color:22,com:17,combin:[20,24,30],comm:8,command:[8,29],commandlin:3,common:[3,18],commonli:18,commun:3,compact:18,compar:4,comparison:18,compat:[7,17,21],complet:[7,26],complex:[3,4,13,23,24],complex_scor:[4,23],compon:[18,29],compound:[2,5],comprehens:16,comput:[4,5,7,8,18,20,21,22],compute_md5:8,conatin:8,concat:[4,6],concat_hidden:[6,24,28,30],concaten:[8,22],concentr:2,conda:16,condit:6,config:0,config_dict:0,configur:[3,21,24],conflict:30,connect:[18,21],connected_compon:30,consid:[11,12,14,29],consist:[18,22,25,28],constraint:24,construct:[0,1,8,18,22,24,27,29],constructor:4,contain:[1,2,3,4,8,9,11,12,13,14,21,24,25,28,30],content:8,context:[0,7,8,11,18,27],context_model:7,contextpredict:[3,23],continu:[4,6,23],continuousfilterconv:[3,23],conveni:[0,24],convent:[18,20,21],convert:[1,2,4,18,22],convolut:[3,6,7,21,23,25,30],coo:8,copi:[0,22],cora:[3,21],coralinkpredict:21,core:[3,16,18,21,24,25,27,28,29,30],correct:30,correspond:[4,7,8,18,20,22,30],cost:22,cover:16,cpp_extens:8,cpu:[0,2,8,18,21,24],creat:[0,1,19,22,24,29],criterion:[7,24,25,28],cross:[4,24,27],csv:2,ct_tox:28,cucurul:23,cuda:[8,18,24,28,30],cum_siz:22,cumsum:[22,30],current:[0,8],curv:[5,21],custom:[0,4,16,19,20],cut:[4,6],cutoff:[4,6],cycl:[5,9],dahl:23,daniel:23,data:[0,2,3,4,5,6,8,11,12,16,19,21,22,23,24,27,28,29,30],data_dict:21,data_mask:21,databas:2,dataload:3,dataset:[0,3,9,11,12,14,16,21,26,27],david:23,ddot:[1,18],debug:24,decod:21,decompos:2,decor:[3,21],deep:[4,18],deepgraphlearn:17,def:[0,20,21,22,30],defaultdict:25,defferrard:23,defin:[0,16,18,21,22,26,30],definit:[0,21],degre:[18,20],degree_in:[18,20],degree_out:18,delanei:3,demonstr:[22,24,30],den:23,deng:23,denot:[18,20],dens:[18,22],depend:17,deploi:29,dequant:6,dequantization_nois:6,deriv:[0,4],derivedclass:0,describ:[20,24],design:[0,21],desir:[9,22],destin:8,detach:8,detail:[1,8],develop:22,deviat:12,devic:[8,18,21,22,24],dft:2,diagon:1,dict:[0,4,7,8,21],diff:20,differ:[1,7,9,20,21,22,27,29,30],differenti:[4,6,24],diffpool:[3,23],dim:[4,20,21,30],dim_siz:20,dimens:[4,6,8,18,29],direct:[7,9,23,26],directli:[0,18,22],directori:25,discount:7,discoveri:[24,25,27,30],displai:8,distinguish:18,distmult:[3,4,13,23],distmult_scor:[4,23],distribut:[0,2,3,6,21,24,25],divers:30,divid:20,document:16,doe:18,doesn:[2,4],doing:11,don:[4,24],done:30,donwload:25,doubl:2,dougal:23,down:2,download:[8,24,28,30],downstream:11,draw:[1,4],drop:2,dropout:4,drug:[2,5,9,24,25,27,30],drugdiscoveri:24,dst:8,dtype:21,due:[1,12,27],dump:[21,24,25],dure:[1,18,25,29],duvenaud:23,dynam:1,each:[0,1,2,4,5,6,11,12,20,22,28,29,30],easili:[18,20],ec50:2,ecfp:18,edg:[1,2,4,6,7,11,18,20,21,22,24,25,27],edge2graph:20,edge_featur:[1,2,18,24,27],edge_feature_dim:27,edge_flow:25,edge_import:18,edge_index:21,edge_input_dim:[4,6,27],edge_list:[1,2,18,20,21,22,24,30],edge_map:30,edge_mask:[18,21,22,24],edge_model:7,edge_prior:25,edge_weight:[1,18,21],edgepredict:[3,23],effcient:20,effect:2,effici:[2,22,29],einsum:21,either:18,elabor:20,electron:[1,2],element:[4,8,22],elif:30,els:[21,30],embed:[3,4,23,26],embedding_dim:[6,29],emploi:18,empow:21,enabl:[0,18,21],enable_auto_context:0,encod:[6,20,21,24],encourag:[7,25],end2end:30,end:[1,4,8,18,22],energet:2,energi:2,engin:[3,21,24,25,27,28,29,30],enjoi:24,enn:6,enough:22,ensur:30,entiti:[2,4,6,23,29],entropi:[4,24,27],enumer:30,epoch:[1,25],eps:[4,6],epsilon:[4,6],equival:[18,20,22],essenti:18,estim:[2,4,5,6],eswc:23,evalu:[5,8,11,12,21,24,28,29,30],even:21,everi:[0,1,4,7,20,29],everyth:[0,24,25,28,29],exampl:[0,1,4,8,18,20,21,22,24,27,29,30],exce:8,except:21,excess:22,excit:2,exist:[8,22,29],exp:21,expand:[0,4],expect:1,expens:27,experiment:2,explicit:[0,1],explicit_h:1,explicitli:[0,2,4,21],explor:27,expon:8,express:8,extend:[1,22],extens:[8,16],extract:[2,8,18],fact:29,fact_ratio:29,fail:2,fals:[0,1,2,4,6,21,25,27,29,30],fan:23,fast:[4,6,23],faster:[8,22],fb15k237:[3,29],fb15k:[3,10,29],fda:[2,24,28],fda_approv:28,featur:[0,2,3,4,6,7,18,21,22,24,28,30],feature_lay:4,feed:29,few:28,field:4,figur:20,figure_s:28,file:[0,3],file_nam:8,filippo:23,fill:22,filter:[2,4,6,23],fin:[24,25],find:21,fine:[9,25],finetun:26,fingerprint:[4,6,23],first:[9,12,18,20,21,22,24,25,29,30],flatten:[21,22,30],flexibl:16,flip:21,float32:21,flow:[3,7,23,25],fly:2,follow:[0,1,4,9,17,18,20,22,24,25,27,28,29,30],footprint:18,forg:17,form:[20,22,29],formal:1,formal_charg:1,format:[8,21],forward:[4,20,21],fout:25,frac:20,framework:[18,22,23,24,30],free:[2,18],freebas:[2,29],freesolv:3,from:[0,1,2,4,6,7,8,11,16,18,20,21,22,24,25,27,28,29,30],from_dens:18,from_molecul:30,from_smil:[0,18,22,24],func:8,fundament:[24,25,30],further:29,futur:25,g2g:[14,30],g2gs_reaction_model:30,g2gs_synthon_model:30,gamma:[7,25],gao:23,gat:3,gaussian:4,gaussiansmear:3,gaussier:23,gcn:[0,3,21,22],gcpn:[9,26],gcpn_zinc250k_1epoch:25,gcpn_zinc250k_1epoch_finetun:25,gcpngener:[3,23,25],gener:[0,3,6,10,16,20,21,22,23,24,26,30],geometr:2,georg:23,get:[0,8,18,22],get_cpu_count:8,get_group:8,get_line_count:8,get_rank:8,get_world_s:8,gilmer:23,gin:[3,24,27,28],gin_model:27,git:17,github:17,give:30,given:[1,8,10,18,29,30],global:[4,21],global_arg:4,gloo:8,gnn:[4,23],goal:[7,9,23,26,30],gome:23,gpu:[0,8,18,21,22,24,25,27,28,29,30],graph1:22,graph2:22,graph:[3,4,7,10,11,16,19,21,22,25,26,27,28,30],graph_col:[1,24,28,30],graph_featur:[1,2,18],graph_id:18,graphaf:[6,7,9,23,26],graphaf_zinc250k_10epoch:25,graphaf_zinc250k_10epoch_finetun:25,graphattentionconv:[3,23],graphattentionnetwork:[6,23],graphautoregressiveflow:[3,7,23],graphconv:[3,21,23],graphconvolutionalnetwork:[6,23],graphgener:25,graphisomorphismconv:[3,23],graphisomorphismnetwork:[6,23],grattarola:23,grid:22,ground:[21,22,30],group:[2,8,24],grow:25,gru:6,guillaum:23,guillem:23,guo:23,guzik:23,h_i:20,h_index:4,h_j:20,half:2,hamilton:23,hand:30,handl:0,hard:[0,22],hardwar:24,has:[4,25,29],havard:2,have:[1,2,4,11,18,22,24,28,29],head:[4,6],heaviest:22,help:24,here:[11,12,18,20,21,22,25,28,29,30],hidden:[4,6,20,24,28],hidden_dim:[4,6,21,22,24,25,27,28,30],hidden_dim_mlp:7,hierarch:[4,23],high:[2,27],higher:7,highlight:30,hirzel:23,hit:13,hiv:[3,11],hoffman:23,hong:23,hongyu:23,hook:0,hop:7,hot:4,how:[1,4,6,8,21,22,23,24,25,28,29,30],howev:21,http:17,human:2,huziel:23,hydrat:2,hydrogen:[1,2],hyperparamet:[0,24,29],iclr:23,icml:23,idea:29,identif:[7,26],identifi:30,ids:[0,1,18],ignor:[4,30],illustr:[21,27,28,29],imag:22,implement:[4,6,7,16,18,20,21,22,25],improv:4,includ:[2,4,18,24,27],independ:[4,28],independentgaussian:[4,25],index:[1,4,5,8,18,20,21,24],indic:[8,21,22],individu:30,induct:[7,26],infer:[0,1,4,6,8,22,23,29],infograph:[3,11,23,26],inform:[2,4,6,11,18,21,23,27],ingredi:21,inherit:0,inhibit:2,inhibitor:2,init_method:8,init_process_group:8,initi:[4,6,8,11,25],inner:21,input:[4,5,6,18,19,20,21,24],input_choic:8,input_dim:[4,6,21,22,24,25,27,28,30],inspir:0,instal:16,instanc:[0,1,18,24,25,28,29],instanti:7,instead:22,integ:18,interact:[4,6,23],interfac:[16,21],intern:18,intersect:30,introduc:[25,29],intuit:[18,22,28],invalid:22,invert:25,investig:28,invok:0,ion_to_molecul:30,iparraguirr:23,irregular:[16,19],is_reaction_atom:30,is_reaction_bond:30,ismorph:6,isol:[18,20],isomorph:[4,24,28],item:[22,28,30],iter:20,its:[8,18,27,28],itself:27,ivan:23,jan:23,jegelka:23,jian:23,jianfeng:23,jiaxuan:23,jit:8,johann:23,join:28,jointli:[21,28],jordan:23,jorg:23,joseph:23,json:24,jure:23,just:[8,18,24,30],justin:23,kazemi:23,kbgat:13,keep:[1,18],keepdim:4,kei:[0,7],kekul:[2,25,30],kernel:[4,6],keyulu:23,keyword:1,kind:[18,20,29],kinderman:23,kipf:23,klau:23,knowledg:[3,4,10,16,18,26],knowledgegraphdataset:3,knowledgegraphembed:29,known:29,kristof:23,kwarg:[0,1,8],l3_regular:6,label:[2,21,28],languag:24,larg:[7,8,11,18,24,25],larger:7,largest:[1,4],last:4,latent:21,later:21,latest:16,launch:[0,24],layer1:4,layer2:4,layer3:4,layer:[3,6,7,16,19,21,22,24,25,28,29],lazi:[2,8],leaki:[4,6],learn:[4,6,7,9,11,18,21,22,24,26,28,29,30],learn_ep:[4,6],learnabl:4,least:24,leman:23,len:[21,22,24,28,30],length:[1,4,5,8,18,21,22,24,28,29,30],leskovec:23,less:4,let:[18,20,21,22,24,25,28,29,30],level:[2,6,7,18,22,23],liang:23,librari:[21,24],like:[5,8,9,18,21,24,25,29,30],likelihood:[4,7,30],limit:12,line:[8,17,18,21,24,25],linear:24,lingxiao:23,link:[4,6,19,23,29],linkpredict:21,lipophil:3,list:[0,1,2,4,6,7,8,18,21],liter:8,literal_ev:8,liu:23,load:[0,1,2,8,16,25,29,30],load_config_dict:[0,24],load_extens:8,load_optim:[25,30],loader:1,local:[4,6,23],log:[0,2,4,8,25,30],log_interv:[0,25],log_sigma:21,logarithm:5,logd:2,logic:[6,22,23,26],logit:21,logp:[3,9,25],long_arrai:8,longtensor:4,look:[21,30],loop:[4,22],loss:[4,6,7,21,22,25],loss_weight:[4,6],lot:[2,12],lower:7,lr_schedul:0,lstm:[4,6,29],maclaurin:23,mae:7,mai:[0,1,2,18,20,21,24,25,28,29,30],main:11,maintain:0,make:[0,21,22,24],malaria:3,manag:[0,8,18],mani:[1,21,22,29],manner:[11,18,21],manual_se:30,map:[1,18,20,25],maria:23,marinka:23,market:2,mask:[4,7,11,19,22,24,26],mask_rat:[7,27],masked_mean:4,math:5,mathemat:22,matric:18,matrix:[1,18],matter:4,max:[4,7,8,22,23],max_edge_unrol:[7,25],max_nod:[7,25],max_predict:[7,30],max_resampl:25,max_scor:[6,29],max_siz:22,maxim:[2,4,6,7,23,24],maximum:[9,25,29],maxreadout:3,mayr:18,md5:8,mean:[4,6,7,8,11,12,18,20,21,27],mean_with_nan:4,meanreadout:3,meantim:25,measur:[2,9],mechan:[2,18,29],mehran:23,member:[0,8],memori:[2,18,22],merg:1,messag:[4,6,19,23],messagepass:[3,23],messagepassingbas:[4,20],messagepassingneuralnetwork:[6,23],meta:3,meta_dict:[0,21],meta_typ:0,meter:3,method:[11,13,20,24,27,29],metric:[0,3,7,16,21,22,24,28],michael:23,mid:20,might:20,milagraph:17,million:18,min:[4,8,22],mincutpool:[3,23],ming:23,mini:1,minim:4,minkai:23,minut:[25,28],miss:29,mlp:[4,6,7],mode:[2,4,8,30],model:[0,2,3,4,7,9,11,12,14,16,19,22,23,26,27,30],modern:[18,20],modifi:25,modul:[0,4,6,7,20,21,24,25,28,29],modulelist:21,mol:[18,24,30],molecuel:11,molecul:[0,3,5,9,10,11,16,18,22,26,27,28,30],molecular:[3,4,6,10,16,25,26],moleculedataset:3,momentum:7,more:[1,8,21,22,24,30],morri:23,most:[21,30],mpnn:3,mrr:13,mse:7,much:[8,22],multi:[4,6,8,23,28],multi_slice_mask:[4,22],multilayerperceptron:3,multinomi:4,multipl:[0,4,24,29],mutual:[4,6,23,27],mutualinform:3,muv:[3,11],my_featur:0,my_node_attr:1,myclass:0,n1cc1c:25,n1cc2:25,name:[0,8,20,21],nan:4,nation:29,natur:22,nc1:25,nc1ccccc1:24,nc2cccn:25,ncc1:25,ncc3:25,ncc:22,nccl:8,nearest:2,need:[4,18,20,21,22,24,25,29],neg:[4,6,7,21,27,29],neg_batch:21,negative_slop:[4,6],neighbor:[2,27],neighborhood:7,nerwork:23,nest:[1,8],network:[3,4,7,9,16,18,19,21,25,28,30],networkx:24,neural:[3,4,7,16,18,19,26,28],neuralfingerprint:[6,23],neuralfingerprintconv:[3,23],neuralfp:6,neurallogicprogram:[6,23,29],neurallp:[3,13,29],neurip:23,next:29,nfp:3,nicola:23,nie:23,nip:23,nll:[7,25],nncc:25,no_rdkit_log:8,node1:25,node2:25,node2graph:20,node:[0,1,2,4,6,7,8,18,19,20,22,24,25,27,30],node_featur:[0,1,2,18,21,22,24,25,27,30],node_feature_dim:[21,24,25,27,28,30],node_flow:25,node_id:18,node_in:[1,18,20,21,24,30],node_mask:18,node_model:7,node_out:[1,18,20,21,24,30],node_posit:2,node_prior:25,node_valu:0,nodeclassificationdataset:3,nois:[6,25],non:[1,4,18,25,30],none:[0,1,2,4,6,7,8,21,22,25,27],nonzero:30,norm:4,normal:[3,4,18],note:[0,1,2,4,16,18,22,24,30],notic:20,novel:9,now:[24,25,28,29,30],nproc_per_nod:[0,24],ntarget:28,nuclear:2,num_atom_typ:25,num_beam:30,num_bond_typ:[25,30],num_col:30,num_cum_nod:18,num_cum_x:22,num_edg:[1,18,21,22,24],num_edge_sampl:7,num_ent:[6,29],num_epoch:[21,24,25,27,28,29,30],num_flow_lay:6,num_gaussian:[4,6],num_gru_lay:6,num_head:[4,6],num_kernel:4,num_lay:[6,25],num_length:22,num_lstm_lay:[4,6,29],num_mlp_lay:[4,6,7],num_neg:[7,29],num_nod:[1,18,20,21,22,24],num_node_sampl:7,num_predict:30,num_rel:[1,4,6,18,25,29,30],num_row:[18,28],num_s2s_step:6,num_sampl:[4,25],num_step:[4,6,29],num_synthon_beam:7,num_work:[0,1],number:[0,1,4,5,6,7,8,9,22,25,29],number_of_gpu:0,obj:8,object:[0,1,8],obtain:[25,30],octanol:[2,5,9],offset:1,onc:[0,8,18,28,29],one:[4,20,21,24,25,28,29,30],one_hot:4,ones:25,ones_lik:8,onli:[0,2,12,17,18,24,25,30],open:[24,25],oper:[4,5,8,18,20,21,22],optim:[0,7,9,21,24,25,27,28,29,30],option:[0,1,2,4,6,7,8,21],opv:3,order:[0,4,18,30],ordered_scaffold_split:1,organ:2,origin:[4,6,7,20,21,24],oriol:23,other:[18,20,21,27,29,30],our:[9,18,21,22,24,25,26,30],out:[20,30],output:[0,2,4,6,7,19,20,21,27],output_dim:[4,6,21],output_nod:4,over:[0,4,5,22,30],overlap:1,overlap_atom:30,overlap_bond:30,oversmooth:[4,23],overwritten:4,own:18,pack:[1,18,22,28,30],pack_offset:22,packag:[0,16],packedgraph:[3,18],packedmolecul:[3,5,22,24,30],pad:[4,22],page:[9,11,12,13,14],pagerank:20,pagerankiter:20,pain:18,pair:[2,4,27,30],pairnorm:[3,23],pand:23,paper:[4,6,16],parallel:0,paramet:[0,1,2,4,5,6,7,8,21,24,25,27,28,29,30],parasit:2,pars:24,part:[7,24,25,28],partit:[5,9],pass:[0,4,6,18,19,23],patent:2,path:[2,8,24],path_to_dump:25,pathwai:[2,30],patrick:23,penal:[3,9,25],penalized_logp:5,penetr:2,per:[0,1,7],perceptron:4,perci:23,perform:[0,8,11,12,20,21,22,29,30],petar:23,peter:23,photovolta:2,pick:[18,20],pickl:25,pierr:23,pieter:23,pietro:23,pip:17,pipelin:30,pkl:25,plausibl:29,pleas:24,plogp:[7,25],plot:[18,28,30],plu:21,png:30,point:21,polici:[7,23,25],polynomi:[4,6,8],pool:3,pool_lay:4,pop:28,popular:[12,18,21,24,27,29],posit:[2,4,7,21,27],possibl:[4,7,22,30],power:[4,6,23],ppo:[7,25],practic:18,prc:5,pre:[3,10,23,26],precis:5,pred:[5,21,22,24,28],pred_atom:30,pred_bond:30,pred_index:22,pred_prob:22,predict:[1,3,4,5,6,10,11,16,19,22,23,24,25,26,27,29,30],predict_react:30,predict_synthon:30,prefix:[0,22],prepar:[16,22,26],preprocess:[0,21,25,30],present:4,pretrain:[9,10,16,24,26],primit:20,print:[8,18,24,25],prior:6,problem:[25,27],procedur:25,process:[2,3,4,6,18,24],produc:[18,22,30],product:[2,7,8,21,30],program:[6,26],progress:0,project:2,prompt:8,proper:29,properli:30,properti:[3,8,9,10,11,16,18,24,25,26,27],propertypredict:[3,24,28],propos:[4,6,7],protoyp:16,provid:[1,16,18,20,21,24,25,27,29],proxim:25,pth:[24,30],pubchem:2,purpl:30,purpos:29,put:[19,25,28,29],python:[0,8,17,24],pytorch:[0,4,8,16,17,20,24],qed:[3,7,9,25],qm8:3,qm9:3,qualit:2,quantit:5,quantum:[2,4,6,23],queri:8,quick:16,r_index:4,radic:1,radical_electron:1,radiu:[4,7],rafael:23,rand:[1,8],rand_lik:21,randint:[1,21,22],random:[0,10,11,30],random_split:[21,24,28,30],randomli:[1,7],rang:[8,21,22,24,28,30],rank:8,rapid:16,rate:[4,7],rather:0,ratio:[14,24],rbf:[4,6],rdkit:[8,17],reactant:[2,30],reaction:[1,2,7,10,30],reaction_cent:30,reaction_dataset:30,reaction_model:30,reaction_optim:30,reaction_reaction_identif:30,reaction_set:30,reaction_solv:30,reaction_task:30,reaction_test:30,reaction_train:30,reaction_valid:30,reaction_valid_smal:30,reactiondataset:3,read:8,readi:29,readout:[3,6,7,19,27],reason:[2,6,10,16,26],recal:[5,30],receiv:5,recept:4,receptor:2,reciproc:18,recogn:0,reconstruct:21,record:0,recurr:6,recurs:0,red:30,reduc:[4,8,18,29],reduct:[4,8],refer:[9,16],refin:2,regist:[0,1,21],register_buff:21,registri:[3,21],regress:[2,5],regular:[4,6,21],reinforc:[9,26],rel:[1,4,5],relat:[1,2,4,6,18,23,25,29,30],relationalgraphconv:[3,23],relationalgraphconvolutionalnetwork:[6,23],relu:[4,6,21],remov:[4,18,22],ren:23,reparameter:21,repeat:[4,21,22],replac:4,replic:2,report:[9,11,12,25],repres:[20,22],represent:[3,4,6,10,16,18,19,20,22,24,25,26,28,30],requir:[17,18,24,25],reset:30,reshuffl:1,respect:[18,21,28],respons:2,rest:30,restrict:0,result:[1,2,8,21,25,28,30],retain:4,retriev:1,retrosynthesi:[3,10,16,26],reusabl:21,revers:20,reward:7,reward_temperatur:[7,25],rex:23,rgcn:[3,25,30],riann:23,riedel:23,right:30,rilei:23,ring:18,rmse:7,rng:8,robert:23,roc:[5,21],romero:23,rotat:[3,4,13,23,29],rotate_scor:[4,23],round:1,routin:24,row:30,rule:[6,23,29],run:29,ryan:23,s2s:6,safe:8,same:[1,4,8,9,18,22,27,30],sampl:[1,2,4,5,7,21,22,24,28,29,30],sample_weight:29,sampler:1,samuel:23,satisfi:8,sauceda:23,save:[0,2,8,16,18,25,30],save_fil:[8,30],scaffold:[1,10,11],scaffold_split:1,scalar:29,scale:[2,4,6,18],scale_individu:4,scatter:20,scatter_add:20,scatter_mean:20,scenario:[0,18],schedul:0,schlichtkrul:23,schnet:[3,4,23],schoenholz:23,scientif:2,score:[4,5,6,9,25],screen:2,script:24,seamlessli:21,search:[0,30],sebastian:23,second:[8,20,21],secretas:2,see:[1,8,24,30],seed:30,seen:27,segment:25,sei:23,select:[24,28],self:[3,4,10,20,21,26],semi:[1,4,6,7,23],semisupervis:1,send:20,separ:[6,21],separate_model:[6,27],sequenc:4,sequenti:3,serv:20,set2set:[3,6],set:[0,1,2,4,7,9,11,12,14,21,24,27,28,29,30],setup:[17,25,28],sever:[18,25,30],shape:[1,4,5,8,18,21,22,24],share:29,shi:23,shift:4,shifted_softplu:[4,6],short_cut:[6,24,28],should:[1,4,7,18,30],show:[12,20,21,22,24,30],shuffl:1,side:[20,30],sider:[3,11],sigma2:4,sigma:4,sigmoid:28,signal:27,signatur:4,silent:0,similar:[21,27,28,29],similarli:30,simpl:[3,4,13,23],simple_scor:[4,23],simpli:[24,29],sinc:[20,21,25],singl:[1,2,8,18],size:[0,1,4,5,8,9,18,22,24,30],skip:8,slice:[4,18,22],slope:[4,6],slow:2,small:[2,25,30],smaller:[22,29],smallest:[4,22],smear:4,smile:[18,24],smiles_list:22,social:3,softmax:3,softplu:4,solubl:2,solut:22,solver:[21,24,25,27,28,29,30],some:[18,20,21,22,25,28,30],sort:1,sourc:[0,1,2,4,5,6,7,8,16,20],space:[4,6,12,23],spars:[1,4,8,18,22],sparse_coo_tensor:8,sparsifi:4,specfic:24,special:27,specif:[8,20,21,24,27,28],specifi:[0,8,18,20,24,29],spectra:2,spectral:[4,6,23],spite:22,split:[1,10,11,14,16,28,29,30],squar:20,squeez:22,stack:8,standard:[21,29,30],start:[4,16,22,25,29],state:[2,20],state_dict:0,statist:2,statu:28,stefan:23,stefani:23,step:[4,6,8,20,21,22],stereo:1,stereo_atom:1,stereochem:1,still:21,stop:[4,25,30],store:[0,2,8,18],str:[2,4,6,7,8],strategi:[7,23],stress:2,string:[0,4,8,18,21,24],structur:[3,8,11,16,19,20,24,25,27,28],sub:30,subclass:21,subgraph:[7,19],subprocess:1,subset:[2,11,18,30],substructur:7,sum:[4,5,6,8,21,22,24,28],sum_:20,sumreadout:3,sun:23,supervis:[1,3,4,7,10,23,26],support:[0,4,8,16,18,20,24],suppos:[4,5],suppress:8,surpress:0,symbol:25,synchron:0,synthesi:30,synthet:[5,9],synthon:[2,7,26],synthon_complet:[7,30],synthon_dataset:30,synthon_id:30,synthon_model:30,synthon_optim:30,synthon_solv:30,synthon_task:30,synthon_test:30,synthon_train:30,synthon_valid:30,synthoncomplet:[3,23,30],system:2,t_index:4,tabl:9,tackl:[4,23],tag:1,tail:4,take:[4,18,21,22,24,25,28,29,30],tang:23,tar:8,target:[1,2,4,5,9,20,21,22,24,28,30],task:[0,2,3,11,12,16,19,22,24,25,27,28,29,30],tau:23,tell:29,temperatur:[7,29],tensor:[1,4,5,8,16,18,21,22],test:[0,11,12,14,16,26],test_set:[0,21,24,28,29],text:22,than:[0,4,8,22],thei:[0,1,4,18,21,24,29],them:[19,22,30],therefor:22,thermodynam:2,thi:[0,1,2,4,6,7,8,9,11,12,13,14,18,20,21,22,24,25,28,29,30],third:18,thoma:23,those:[2,27],three:[18,20],threshold:8,through:[0,22,28],throughput:2,time:[8,22,25],timothi:23,titl:[28,30],titov:23,tkatchenko:23,to_molecul:30,to_smil:25,togeth:[19,25,28,29],toi:[22,27],tolist:30,toolbox:16,top1_index:30,top3_index:22,top3_valu:22,top:[4,7,9,14,16,22,30],torch:[0,1,3,4,18,20,21,22,24,25,27,28,29,30],torch_data:[21,27,30],torch_scatt:20,torchdrug:[3,17,18,20,21,22,24,25,27,28,29,30],total:[8,25,30],toward:9,tox21:[3,11],toxcast:[3,11],toxic:[2,24],toxicolog:2,toxiti:28,track:0,train:[0,3,10,12,14,16,21,23,25,26,30],train_graph:21,train_set:[0,21,24,28,29],trake:0,trans:[3,4,13,23],transe_scor:[4,23],transfer:[6,8,18,24],transform:2,translat:[4,6,23,30],trial:[2,24,28],trick:18,triplet:[2,6,29],triplet_list:18,trivial:[2,20],trouillon:23,true_atom:30,true_bond:30,truncat:8,truth:[8,21,22,30],tune:[9,25],tupl:[1,4,8,28],tutori:[16,24,25,28,29],two:[1,4,6,7,11,14,21,22,24,25,28,29,30],txt:17,type:[0,1,7,8,18,21,25,27,30],typic:[0,18,22,24,29],u_i:20,under:[5,21],undirect:21,union:[4,30],unit:6,unknown:10,unlik:22,unnecessari:22,unnorm:4,unpack:[1,18],unsqueez:[20,22,30],unsupervis:[3,6,23,27],updat:[0,6,7,20,21],url:8,usag:24,use:[0,1,4,6,18,20,22,24,25,28,29,30],use_edg:[6,25],used:[0,2,4,7,18,20,24,29,30],uses:18,using:[11,24,29,30],uspto50k:[3,30],uspto50k_synthon_valid:30,uspto:2,usual:22,usuni:23,util:[1,3,16,21,24,27,28,30],valid:[0,3,11,12,14,21,22,24,25,28,29,30],valid_set:[0,21,24,28,29],valu:[0,4,7,8,20,22,28,29],van:23,vandergheynst:23,vanilla:[4,12],variabl:[18,21],variad:[1,3,4,19],variadic_accuraci:[5,22],variadic_cross_entropi:[4,22],variadic_log_softmax:[4,22],variadic_max:[4,22],variadic_mean:[4,22],variadic_sum:[4,22],variadic_topk:[4,22],varianc:[4,20],variant:[4,6],variat:21,variationalgraphconvolutionalnetwork:21,vdot:[1,18],vector:[4,29],verbos:[2,7],verma:23,version:[2,18],vgae:21,vgcn:21,via:[6,17,21,23],view:[20,22,24,27],vijai:23,vika:23,vinyal:23,virtual:2,visual:[18,22,24,25,28,30],vitro:2,wait:8,want:18,water:[2,5,9],weight:[1,4,6,7,24,29],weihua:23,weinan:23,welbl:23,well:[16,23,29,30],wen:23,when:[0,4,20,22],whenev:22,where:[0,1,14,18,20,22,24,29],whether:[2,4,24],which:[0,1,9,17,21,22,24,25,29,30],wide:24,william:23,wise:8,with_hydrogen:2,without:[0,2,8,24],wn18:[3,10],wn18rr:[3,10],won:0,word:[2,18],wordnet:2,work:30,worker:[0,8],would:29,wrap:[18,24,30],wrapper:[7,21],write:[18,21,22,24],wrong:30,xavier:23,xiang:23,xiaodong:23,yang:23,yih:23,ying:23,yoshua:23,you:[0,1,17,21,23,24,25,29],your_script:0,yourself:21,yun:23,zero:[18,21,25],zero_diagon:4,zhang:23,zhao:23,zhaocheng:23,zhi:23,zhilin:23,zhiqe:23,zhu:23,zinc15:11,zinc250k:[3,9,25],zinc2m:3,zinc:2,zip:[8,28],zip_fil:8,zitnik:23},titles:["torchdrug.core","torchdrug.data","torchdrug.datasets","Documentation","torchdrug.layers","torchdrug.metrics","torchdrug.models","torchdrug.tasks","torchdrug.utils","Graph Generation","Benchmark","Pretrained Molecular Representations","Molecule Property Prediction","Knowledge Graph Reasoning","Retrosynthesis","&lt;no title&gt;","TorchDrug - A deep learning platform for drug discovery","Installation","Graph Data Structures","Notes","Graph Neural Network Layers","Customize Models &amp; Tasks","Batch Irregular Structures","Papers Implemented","Quick Start","Molecule Generation","Tutorials","Pretrained Molecular Representations","Property Prediction","Knowledge Graph Reasoning","Retrosynthesis"],titleterms:{"class":14,"function":[1,4,8],accuraci:5,attribut:[18,27],attributemask:7,auprc:5,auroc:5,autoregressivegener:7,auxiliari:8,bace:[2,12],base:24,basic:5,batch:[18,22],bbbp:[2,12],benchmark:10,broadcast:20,center:30,centeridentif:7,cep:[2,12],chebnet:6,chebyshevconv:4,chemblfilt:2,chemic:5,cites:2,classif:24,classifi:24,clintox:[2,12],commandlin:8,common:4,commun:8,complet:30,complex:6,conda:17,configur:0,contain:0,contextpredict:7,continuousfilterconv:4,convolut:4,cora:2,core:0,creat:18,custom:21,data:[1,18],dataload:1,dataset:[1,2,24,25,28,29,30],decor:8,deep:16,defin:[24,25,28,29],delanei:2,design:23,differenti:23,diffpool:4,direct:25,discoveri:[16,23],distmult:6,distribut:[4,8],document:3,drug:[16,23],edgepredict:7,embed:[6,29],engin:0,esol:12,fb15k237:2,fb15k:[2,13],featur:1,file:8,finetun:25,flow:6,freesolv:[2,12],from:17,gat:6,gaussiansmear:4,gcn:6,gcpn:25,gcpngener:7,gener:[7,9,25],gin:6,given:14,goal:25,graph:[1,2,6,9,13,18,20,23,24,29],graphaf:25,graphattentionconv:4,graphautoregressiveflow:6,graphconv:4,graphisomorphismconv:4,hiv:[2,12],identif:30,implement:23,induct:29,infograph:[6,27],input:22,instal:17,irregular:22,knowledg:[2,6,13,23,29],knowledgegraphdataset:1,layer:[4,20,23],learn:[16,23,25],link:21,lipophil:[2,12],load:24,logic:29,logp:5,malaria:[2,12],mask:[18,27],maxreadout:4,meanreadout:4,messag:20,messagepass:4,meta:0,meter:0,metric:5,mincutpool:4,model:[6,21,24,25,28,29],molecul:[1,2,7,12,23,24,25],molecular:[7,11,23,27],moleculedataset:1,mpnn:6,multilayerperceptron:4,mutualinform:4,muv:[2,12],network:[2,6,20,23,24],neural:[6,20,23,24,29],neuralfingerprintconv:4,neurallp:6,nfp:6,node:21,nodeclassificationdataset:1,normal:[6,23],note:19,novo:23,oper:24,opv:2,our:[28,29],output:22,packedgraph:1,packedmolecul:1,pairnorm:4,paper:23,pass:20,penal:5,platform:16,pool:[4,23],pre:[7,11,27],predict:[2,7,12,21,28],prepar:[24,25,28,29,30],pretrain:[11,23,25,27],process:[1,8],program:29,properti:[2,7,12,28],propertypredict:7,put:21,qed:5,qm8:[2,12],qm9:[2,12],quick:24,random:12,reaction:14,reactiondataset:1,readout:[4,20],reason:[13,23,29],registri:0,reinforc:25,relationalgraphconv:4,represent:[7,11,21,23,27],result:11,retrosynthesi:[2,7,14,23,30],rgcn:6,rotat:6,save:24,scaffold:12,schnet:6,self:[6,11,27],sequenti:4,set2set:4,sider:[2,12],simpl:6,social:2,softmax:4,sourc:17,split:[12,24],start:24,structur:[1,18,22],subgraph:18,sumreadout:4,supervis:[6,11,27],synthon:30,synthoncomplet:7,task:[7,21],tensor:24,test:[24,28,29],them:21,togeth:21,torch:8,torchdrug:[0,1,2,4,5,6,7,8,16],tox21:[2,12],toxcast:[2,12],train:[7,11,24,27,28,29],trans:6,tutori:26,unknown:14,unsupervis:7,uspto50k:[2,14],util:8,valid:5,variad:[5,22],wn18:[2,13],wn18rr:[2,13],zinc250k:2,zinc2m:2}})