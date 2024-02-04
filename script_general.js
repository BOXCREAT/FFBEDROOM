(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderRadius":0,"shadow":false,"gap":10,"definitions": [{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_783B8444_7377_233A_41B1_337B6DC8A1D6","id":"panorama_78BADD47_7377_3DC6_41D4_301C64E70768_camera"},{"thumbnailUrl":"media/panorama_78BADD47_7377_3DC6_41D4_301C64E70768_t.jpg","partial":false,"label":trans('panorama_78BADD47_7377_3DC6_41D4_301C64E70768.label'),"hfovMin":"120%","hfovMax":130,"class":"Panorama","frames":[{"cube":{"levels":[{"width":15360,"rowCount":5,"url":"media/panorama_78BADD47_7377_3DC6_41D4_301C64E70768_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_78BADD47_7377_3DC6_41D4_301C64E70768_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_78BADD47_7377_3DC6_41D4_301C64E70768_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_78BADD47_7377_3DC6_41D4_301C64E70768_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_78BADD47_7377_3DC6_41D4_301C64E70768_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_78BADD47_7377_3DC6_41D4_301C64E70768_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"hfov":360,"pitch":0,"data":{"label":"TDT_ffbedrm"},"id":"panorama_78BADD47_7377_3DC6_41D4_301C64E70768"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_78BADD47_7377_3DC6_41D4_301C64E70768_camera","media":"this.panorama_78BADD47_7377_3DC6_41D4_301C64E70768","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"borderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"playbackBarHeight":10,"playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","paddingRight":0,"progressBackgroundColorRatios":[0],"paddingLeft":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressOpacity":1,"subtitlesTextShadowHorizontalLength":1,"progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipHorizontalAlign":"center","height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"playbackBarHeadShadowVerticalLength":0,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"toolTipFontWeight":"normal","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":0,"class":"ViewerArea","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"borderSize":0,"toolTipPaddingRight":6,"minWidth":100,"progressHeight":10,"subtitlesOpacity":1,"subtitlesBorderSize":0,"progressBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","transitionDuration":500,"progressBorderRadius":0,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"shadow":false,"data":{"name":"Main Viewer"}},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_783B8444_7377_233A_41B1_337B6DC8A1D6"}],"width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupImage":TDV.Tour.Script.showPopupImage,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showWindow":TDV.Tour.Script.showWindow,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openLink":TDV.Tour.Script.openLink,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"init":TDV.Tour.Script.init,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizFinish":TDV.Tour.Script.quizFinish,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"registerKey":TDV.Tour.Script.registerKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"mixObject":TDV.Tour.Script.mixObject,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPixels":TDV.Tour.Script.getPixels,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setValue":TDV.Tour.Script.setValue,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"historyGoForward":TDV.Tour.Script.historyGoForward,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"initAnalytics":TDV.Tour.Script.initAnalytics,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":0.75,"verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","children":["this.MainViewer"],"downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.init()","class":"Player","minHeight":20,"data":{"defaultLocale":"en","name":"Player590","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1},"locales":{"en":"locale/en.txt"}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sun Feb 4 2024