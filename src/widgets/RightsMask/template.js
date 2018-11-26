let templeteStr = `
<div id="modalBenefit">
  <span class="icon-close"></span>
  <div class="shadow-left"></div>
  <div class="special-shadow-left"></div>
  <div class="special-shadow-left-plus"></div>
  <div class="shadow-right"></div>
  <div class="special-shadow-right"></div>
  <div class="special-shadow-right-plus"></div>
  <div class="rights-area" id="rights-slider">
    <div class="list-wrapper">
      <div class="rights-list clearfix" id="rights-left">
        <div class="rights-item disable">
          <div class="rights-icon">
            <span class="tag-new"></span>
            <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
              data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
            <div class="rights-name">1专享礼包</div>
            <div class="rights-condition">200京享值可享</div>
          </div>
          <div class="rights-item">
            <div class="rights-icon">
              <span class="tag-new"></span>
              <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
              <div class="rights-name">2专享礼包</div>
              <div class="rights-condition">200京享值可享</div>
            </div>
            <div class="rights-item">
              <div class="rights-icon">
                <span class="tag-new"></span>
                <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                  data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
                <div class="rights-name">3专享礼包</div>
                <div class="rights-condition">200京享值可享</div>
              </div>
              <div class="rights-item">
                <div class="rights-icon">
                  <span class="tag-new"></span>
                  <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                    data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
                  <div class="rights-name">4专享礼包</div>
                  <div class="rights-condition">200京享值可享</div>
                </div>
                <div class="rights-item">
                  <div class="rights-icon">
                    <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                      data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
                    <div class="rights-name">5专享礼包</div>
                    <div class="rights-condition">200京享值可享</div>
                  </div>
                  <div class="rights-item">
                    <div class="rights-icon">
                      <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                        data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
                      <div class="rights-name">6专享礼包</div>
                      <div class="rights-condition">200京享值可享</div>
                    </div>
                    <div class="rights-item">
                      <div class="rights-icon">
                        <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                          data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
                        <div class="rights-name">7专享礼包</div>
                        <div class="rights-condition">200京享值可享</div>
                      </div>
                      <div class="rights-item">
                        <div class="rights-icon">
                          <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                            data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
                          <div class="rights-name">8专享礼包</div>
                          <div class="rights-condition">200京享值可享</div>
                        </div>
                        <div class="rights-item">
                          <div class="rights-icon">
                            <img class="benefitImg" src="../mockImages/rights-icon.png" alt=""
                              data-hover="../mockImages/banner-img.png" data-src="../mockImages/rights-icon.png">
                        </div>
                            <div class="rights-name">专享礼包</div>
                            <div class="rights-condition">200京享值可享</div>
                          </div>
                          <div class="rights-item plus">
                            <div class="rights-icon">
                              <span class="icon-plus"></span>
                            </div>
                            <div class="rights-name">PLUS权益</div>
                          </div>
                        </div>
                      </div>
                      <div class="btn-next" id="btn-next"></div>
                      <div class="btn-prev" id="btn-prev"></div>
                    </div>
                    <div class="rights-intro" style="display: none">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper">
                          <p>1京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <ul>
                            <li>sadf</li>
                            <li>asdf</li>
                            <li>asdf</li>
                            <li>asdf</li>
                          </ul>
                          <div class="upgrade-guide">
                            <div class="title">
                              <span class="icon-rights"></span>权益升级
                        </div>
                            <div class="txt">
                              <span>开通PLUS会员享XXX</span>
                              <a href="javascript:void(0);" class="upgrade-btn">去看看<span class="triangle"></span></a>
                            </div>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn">申请售后<span class="triangle"></span></a>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper">
                          <p>2京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>超出免运费次数，收费标准如下：</p>
                        </div>
                        <a href="javascript:void(0);" class="btn">申请售后<span class="triangle"></span></a>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper">
                          <p>3京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>超出免运费次数，收费标准如下：</p>
                        </div>
                        <a href="javascript:void(0);" class="btn">申请售后<span class="triangle"></span></a>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper no-btn">
                          <p>4京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>超出免运费次数，收费标准如下：</p>
                        </div>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <!--当权益说明没有button的时候则添加no-btn-->
                <div class="info-wrapper no-btn">
                          <p>
                            5京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>超出免运费次数，收费标准如下：</p>
                          <div class="upgrade-guide">
                            <div class="title">
                              <span class="icon-rights"></span>权益升级
                        </div>
                            <div class="txt">
                              <span>开通PLUS会员享XXX</span>
                              <a href="javascript:void(0);" class="upgrade-btn">去看看<span class="triangle"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper">
                          <p>6京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>
                            京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。
                        超出免运费次数，收费标准如下：超出免运费次数，收费标准如下：</p>
                          <div class="upgrade-guide">
                            <div class="title">
                              <span class="icon-rights"></span>权益升级
                        </div>
                            <div class="txt">
                              <span>开通PLUS会员享XXX</span>
                              <a href="javascript:void(0);" class="upgrade-btn">去看看<span class="triangle"></span></a>
                            </div>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn">申请售后<span class="triangle"></span></a>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper">
                          <p>7京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>超出免运费次数，收费标准如下：</p>
                          <div class="upgrade-guide">
                            <div class="title">
                              <span class="icon-rights"></span>权益升级
                        </div>
                            <div class="content">
                              <span>开通PLUS会员享XXX开通PLUS会员享XXX开通PLUS会员享XXX开通PLUS会员享XXX开通PLUS会员享XXX</span>
                              <a href="javascript:void(0);" class="upgrade-btn">去看看<span class="triangle"></span></a>
                            </div>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn">申请售后<span class="triangle"></span></a>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper">
                          <p>8京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>超出免运费次数，收费标准如下：</p>
                        </div>
                        <a href="javascript:void(0);" class="btn">申请售后<span class="triangle"></span></a>
                      </div>
                    </div>
                    <div class="rights-intro">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper">
                          <p>京东自营产品使用售后服务（退货、换货、维修）时享受免费上门取件服务。</p>
                          <p>超出免运费次数，收费标准如下：</p>
                        </div>
                        <a href="javascript:void(0);" class="btn">申请售后<span class="triangle"></span></a>
                      </div>
                    </div>
                    <!--PLUS特权加class：plus-->
        <div class="rights-intro plus">
                      <div class="shadow"></div>
                      <div class="rights-info">
                        <div class="info-wrapper no-btn">
                          <div class="plus-link-area">
                            <a href="javascript:void(0);" class="plus-link">开通PLUS会员，立享全部权益<span
                              class="icon-link"></span></a>
                            <p class="save">PLUS权益平均每年为用户省<span>￥676</span></p>
                          </div>
                          <div class="plus-rights-list clearfix">
                            <div class="plus-rights">
                              <span class="icon-29"></span>
                              <div class="title">免费领</div>
                              <div class="rights-txt">爱奇艺会员</div>
                            </div>
                            <div class="plus-rights">
                              <span class="icon-31"></span>
                              <div class="title">10倍</div>
                              <div class="rights-txt">购物返京豆</div>
                            </div>
                            <div class="plus-rights">
                              <span class="icon-32"></span>
                              <div class="title">100元/月</div>
                              <div class="rights-txt">全品类券</div>
                            </div>
                            <div class="plus-rights">
                              <span class="icon-33"></span>
                              <div class="title">360元/月</div>
                              <div class="rights-txt">运费券礼包</div>
                            </div>
                            <div class="plus-rights active">
                              <span class="icon-34"></span>
                              <div class="title">服饰9折</div>
                              <div class="rights-txt">每月折扣券</div>
                            </div>
                            <div class="plus-rights">
                              <span class="icon-35"></span>
                              <div class="title">百万</div>
                              <div class="rights-txt">会员价商品</div>
                            </div>
                            <div class="plus-rights active">
                              <span class="icon-36"></span>
                              <div class="title">24小时</div>
                              <div class="rights-txt">专属客服</div>
                            </div>
                            <div class="plus-rights">
                              <span class="icon-37"></span>
                              <div class="title">免费</div>
                              <div class="rights-txt">上门退换货</div>
                            </div>
                            <div class="plus-rights active">
                              <span class="icon-38"></span>
                              <div class="title">PLUS DAY</div>
                              <div class="rights-txt">专属购物节</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`
export default templeteStr
